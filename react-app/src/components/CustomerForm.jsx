import React, {Component} from 'react';
import { Customer } from '../model/Customer';


class CustomerForm extends Component{

    state = {
        customer: new Customer(0, "", "")
        
    }

    constructor(props){
        super(props);

        console.log("[CustomerForm constructor]")

        this.initState = this.state;
        if(this.props.customer){
            this.state.customer = this.props.customer;
        }
    }

    // static getDerivedStateFromProps(nextProps, currentState){
        
    //     // this.setState({
    //     //     customer: nextProps.customer
    //     // })

    //     if(nextProps.customer && nextProps.customer.id !== currentState.customer.id){
    //         return {
    //             customer: nextProps.customer
    //         }
    //     }
    //     else{
    //         return null;
    //     }
    // }

  


    change = (evt) => {

        const value = evt.target.value;
        const propertyName = evt.target.name;
        const customer = {...this.state.customer};
        
        if(propertyName === "id"){
            customer[propertyName] = parseInt(value);
        }
        else{
            customer[propertyName] = value;
        }
        

        //Async
        this.setState({
            customer: customer
        }, () => {
            console.log(this.state.customer);
        });
    }

    save = () => {

        this.props.onSave(this.state.customer);
        
        if(!this.props.customer){
            this.setState(this.initState);
        }
        
    }

    render(){

        const customer = this.state.customer;

        return (
            <div>
                <fieldset>
                    <p>ID</p>
                    <div>
                        <input name="id" type="number"
                            placeholder="ID" value={customer.id} onChange={this.change}/>
                    </div>

                    <p>Name</p>
                    <div>
                        <input name="name" placeholder="Name" 
                            value={customer.name} onChange={this.change}/>
                    </div>

                    <p>Location</p>
                    <div>
                        <select name="location" value={customer.location} onChange={this.change}>
                            <option value="">Select Location</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </div>

                    <div>
                        <button onClick={this.save}>Save</button> &nbsp;&nbsp;
                        <button onClick={this.props.onCancel}>Cancel</button>
                    </div>

                </fieldset>

            </div>
            
        );
    }

}

export default CustomerForm;