import React, { Component } from 'react';
import { Customer } from '../model/Customer';
import './ListCustomers.css';

class ListCustomers extends Component {

    state = {
        data: []
    }
    constructor(props) {
        super(props);

        //Initialize Data
        this.state.data.push(new Customer(1, "Facebook", "Bangalore"));
        this.state.data.push(new Customer(2, "Apple", "Bangalore"));
        this.state.data.push(new Customer(3, "Google", "Hyderabad"));
        this.state.data.push(new Customer(4, "Microsoft", "Bangalore"));
    }

    renderCustomers = () => {

        return this.state.data.map((item, index) => {
            return (
                <div key={item.id} className='customer'>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Location: {item.location}</p>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                    {this.state.data.length > 0 ? this.renderCustomers() : <p>No Customers</p>}
                </div>
            </div>
        );
    }
}

export default ListCustomers;