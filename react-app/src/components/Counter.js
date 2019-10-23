import React, {Component} from 'react';

//ES 6
class Counter extends Component{
 
    //ES 7
    state = {
        count: 0
    }

    //inpRef = null;

    constructor(props){
        super(props);

        //ES6
        // this.state = {
        //     count: 0
        // };

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

    //ES7
    decr = () => {
        console.log("Counter decr");
        this.setState({
            count: this.state.count - 1
        });
    } 
    change = (evt) => {
        console.log("change", evt.target.value);
        this.setState({
            count: parseInt(evt.target.value)
        });
    }

    setValue = () => {
        if(this.inpRef.value){

            this.setState({
                count: parseInt(this.inpRef.value)
            });
        }
    }
    render(){
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h5>Counter: {this.state.count}</h5>

                <div>
                    {/* Controlled Input */}
                    Count: <input type="number" 
                                placeholder="Count" 
                                value={this.state.count}
                                onChange={this.change}/>
                </div>

                <div>
                    {/* Uncontrolled Input */}
                    <input type="number" 
                            placeholder="New Count"
                            ref={(ref) => { this.inpRef = ref}}/>&nbsp;&nbsp;
                    <button onClick={this.setValue}>Set Count</button>
                </div>

                <div>
                    <button id="incBtn" onClick={this.inc}>Increment</button> &nbsp;&nbsp;
                    <button onClick={this.decr}>Decrement</button>
                </div>

            </div>
        );
    }
}

export default Counter;