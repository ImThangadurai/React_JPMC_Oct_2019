import React, {Component} from 'react';


class Counter extends Component{
 
    state = {
        count: 0
    }

    constructor(props){
        super(props);

        if(this.props.value){
            this.state.count = parseInt(this.props.value);
        }
        this.inc = this.inc.bind(this);
    }

    inc(){
        console.log("Counter inc");
        this.setState({
            count: this.state.count + 1
        });
    }



    render(){
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h5>Counter: {this.state.count}</h5>

                <div>
                    <button onClick={this.inc}>Increment</button> &nbsp;&nbsp;
                    <button>Decrement</button>
                </div>
            </div>
        );
    }
}

export default Counter;