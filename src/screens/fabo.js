import React, { Component } from 'react'

export default class fabo extends Component {
	constructor(props){
        super(props);
        
        this.state={
            num:1,
            array:[0,1]
        }
        // console.log(this.state.array);
	}

    getNthValue = (n) => {
        var faboArray = [0,1];
        for(var i=2; i<=n; i++){
            faboArray.push( faboArray[i-1] + faboArray[i-2]);
            var nthValue = faboArray[i];
        }
        this.setState({array: faboArray});
        return nthValue;
    }


	increaseNum = (n) => {
        // this.setState({num: (this.state.num + 1)});
        // console.log('this is num', this.state.num);
        // var nthValue = this.getNthValue(this.state.num);
        // console.log('nthValue', nthValue);
        // console.log('array', this.state.array);
        // return <h3>第{this.state.num + 1}項目：{nthValue}</h3>
        this.setState({num: (this.state.num+1) });
        var n = this.state.num;
        var arrays = [0,1];
        for(var i=2; i<=n; i++){    
                arrays.push(arrays[i-1] + arrays[i-2]);
            }
        this.setState({array: arrays})
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
      componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }
      


    render() {
		return (
			<div  style={{backgroundColor:'white', marginLeft:'20px'}}>
                <button onClick={this.increaseNum} style={{position:'fixed'}}>showfabo</button>
                <br/>
                <br/>
                <h1 style={{position:'fixed'}}>ふぁぼなち数列</h1>
                <br/>
                <br/>
                <div>
                    {/* <h3>第1項目：0</h3>
                    <h3>第2項目：1</h3> */}
                    {/* {this.state.array} */}
                    {this.state.array.map(num=><h3 style={{backgroundColor:"skyblue"}}>{num}</h3>)}
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
			</div>
		)
	}
}
