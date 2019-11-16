import React from 'react';
import './style.scss';

import { Pagination, Container } from 'react-bootstrap';


export default class MyPagination extends React.Component{
    constructor(props){
        super(props);
            
        const currentPage = 1;

        this.state = { 
            currentPage: currentPage, 
            paginationItems: this.setPagination(this.props.numOfPage, currentPage)
        }
    }

    setPagination = (numOfPage, currentPage) => {
        let items = [];
        for (let number = 1; number <= numOfPage; number++) {
            items.push(
                this.renderPaginationItem(number, number==currentPage)
            );
        }
        return items;
    }

    handleChangingPage = (paginationItems, currentPage, newPage) => {
        let items = paginationItems;
        items[currentPage-1] = this.renderPaginationItem(currentPage, false);
        items[newPage-1] = this.renderPaginationItem(newPage, true);
        this.setState({
            currentPage: newPage,
            paginationItems: items
        });
    }

    renderPaginationItem = (number, active) => {
        return (
                <Pagination.Item 
                    key={number} 
                    active={active}
                    className="pagination-item"
                    onClick={() => {
                        this.handleChangingPage(
                            this.state.paginationItems,
                            this.state.currentPage,
                            number
                        )
                        this.props.handlePagination(number)
                        window.scrollTo(0, 0);
                    // do something ex) console.log("called");
                }}
                >
                    {number}
                </Pagination.Item>            
        );
    }

    render(){
        if(this.state.paginationItems.length<=1){
            return null;
        }
        else {
            return(
                <Container className="pagination-container">                
                    <Pagination>{this.state.paginationItems}</Pagination>
                </Container>
            );
        }        
    }
}
