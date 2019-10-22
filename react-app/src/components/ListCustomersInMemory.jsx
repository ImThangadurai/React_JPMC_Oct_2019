import React, { Component, PureComponent } from 'react';
import { Customer } from '../model/Customer';
import './ListCustomers.css';
import CustomerForm from './CustomerForm';

class ListCustomers extends PureComponent {

    state = {
        data: [],
        addMode: false,
        selectedCustomer: null
    }
    constructor(props) {
        super(props);

        //Initialize Data
        this.state.data.push(new Customer(1, "Facebook", "Bangalore"));
        this.state.data.push(new Customer(2, "Apple", "Bangalore"));
        this.state.data.push(new Customer(3, "Google", "Hyderabad"));
        this.state.data.push(new Customer(4, "Microsoft", "Bangalore"));

        console.log("[ListCustomers constructor]")
    }

    componentWillMount() {
        console.log("[ListCustomers componentWillMount]")
    }
    componentDidMount() {
        console.log("[ListCustomers componentDidMount]")
    }
    componentWillReceiveProps() {
        console.log("[ListCustomers componentWillReceiveProps]")
    }
    // shouldComponentUpdate(){
    //     console.log("[ListCustomers shouldComponentUpdate]");
    //     return true;
    // }
    componentWillUpdate() {
        console.log("[ListCustomers componentWillUpdate]")
    }
    componentDidUpdate() {
        console.log("[ListCustomers componentDidUpdate]")
    }










    delete = (evt, index) => {

        evt.preventDefault();
        const copy = [...this.state.data];
        // const index = copy.findIndex(item => item.id === id);
        copy.splice(index, 1);
        this.setState({
            data: copy
        });
    }

    add = (customer) => {

        const customers = [...this.state.data, customer];
        //customers.push(customer);
        this.setState({
            data: customers
        });
    }

    changeAddMode = () => {
        this.setState({
            addMode: false
        });
    }

    edit = (evt, customer) => {

        evt.preventDefault();
        this.setState({
            selectedCustomer: customer
        });
    }

    editUpdate = (customer)=> {

        const customers = [...this.state.data];
        const index = customers.findIndex(item => item.id === customer.id);
        customers[index] = customer;

        this.setState({
            data: customers, 
        });
    }
    renderCustomers = () => {

        return this.state.data.map((item, index) => {
            return (
                <div key={item.id} className='customer'>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Location: {item.location}</p>
                    <div>
                        {/* <button onClick={this.delete.bind(this, index)}>Delete</button> */}
                        {/* <button onClick={() => {this.delete(index)}}>Delete</button> */}
                        <a href="#" onClick={(evt) => { this.delete(evt, index) }}>Delete</a>
                        &nbsp;
                        <a href="#" onClick={evt => this.edit(evt, item)}>Edit</a>
                    </div>
                </div>
            );
        })
    }

    render() {

        console.log("[ListCustomers render]")

        //const data = this.state.data;
        //ES6 Destructuring
        const { addMode, selectedCustomer, data } = this.state;

        return (
            <div>
                <h2>Customers</h2>
                <div>
                    <button onClick={() => this.setState({ addMode: true })}>Add New</button>
                </div>
                <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
                    {data.length > 0 ? this.renderCustomers() : <p>No Customers</p>}
                </div>

                {addMode ? <CustomerForm
                    onSave={this.add}
                    onCancel={this.changeAddMode} /> : null}

                {selectedCustomer ?
                    <CustomerForm 
                            key={selectedCustomer.id} 
                            customer={selectedCustomer}
                            onSave={this.editUpdate}
                            onCancel={() => this.setState({selectedCustomer: null})} /> : null}
            </div>
        );
    }
}

export default ListCustomers;