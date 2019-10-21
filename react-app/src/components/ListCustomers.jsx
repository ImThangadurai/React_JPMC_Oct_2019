import React, {Component} from 'react';
import { Customer } from '../model/Customer';

class ListCustomers extends Component{

    state = {
        data: []
    }
    constructor(props){
        super(props);

        //Initialize Data
        this.state.data.push(new Customer(1, "Facebook", "Bangalore"));
        this.state.data.push(new Customer(2, "Apple", "Bangalore"));
        this.state.data.push(new Customer(3, "Google", "Hyderabad"));
        this.state.data.push(new Customer(4, "Microsoft", "Bangalore"));
    }

    render(){
        return (
             <div>
                 <h2>Customers</h2>
                 {this.state.data.map((item, index) => {
                     return (
                         <div>
                             <p>ID: {item.id}</p>
                             <p>Name: {item.name}</p>
                             <p>Location: {item.location}</p>
                         </div>
                     );
                 })}
             </div>   
        );
    }
}

export default ListCustomers;