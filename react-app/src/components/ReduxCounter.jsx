import React, {Component} from 'react';
import {connect} from 'react-redux';

//import {createDECRAction, createINCRAction} from '../redux/actionCreators';
import * as actionCreators from '../redux/actionCreators';

class ReduxCounter extends Component{

    inc = () => {

        this.props.increment();
    }
    decr = () => {
        this.props.decrement();
    }

    componentDidMount(){
        this.props.fetchCustomers();
    }

    render(){
        return(
            <div>
                <h3>Redux Counter</h3>
                <h5>Count: {this.props.ctr}</h5>
                <div>
                    <button onClick={this.inc}>Increment</button>&nbsp;
                    <button onClick={this.decr}>Decrement</button>
                </div>
                <div>
                    {this.props.customers.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>ID: {item.id}</p>
                                <p>Name: {item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        ctr: state.count,
        customers: state.customers
    }
}
// const mapDispatchToProps = (dispatch)=> {
    
//     return {
//         increment: () => {dispatch({type: "INCR_CTR"})},
//         decrement: () => {dispatch({type: "DECR_CTR"})},
//     }
// }

const mapDispatchToProps = (dispatch)=> {
    
    return {
        increment: () => {dispatch(actionCreators.createINCRAction())},
        decrement: () => {dispatch(actionCreators.createDECRAction())},
        fetchCustomers: () => {dispatch(actionCreators.createFetchCustomers())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);