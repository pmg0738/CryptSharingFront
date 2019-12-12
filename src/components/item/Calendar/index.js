// import React, { Component } from 'react';
// import Calendar from 'react-calendar';
 
// export default class MyApp extends Component {
//   state = {
//     date: new Date(),
//   }
 
//   onChange = date => this.setState({ date })
 
//   render() {
//     return (
//       <div>
//         <Calendar
//           onChange={this.onChange}
//           value={this.state.date}
//         />
//       </div>
//     );
//   }
// }




import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export default class Calendar extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}