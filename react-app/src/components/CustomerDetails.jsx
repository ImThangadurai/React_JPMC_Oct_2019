import React, {Component} from 'react';


class CustomerDetails extends Component{

    constructor(props){
        super(props);

        console.log(props);
    }

    render(){
        return (
            <div>
                <h3>Customer Details of {this.props.match.params.id}</h3>
                <div>
                    <button onClick={() => {this.props.history.goBack()}}>Back</button>
                </div>
            </div>
        )
    }

}

export default CustomerDetails;