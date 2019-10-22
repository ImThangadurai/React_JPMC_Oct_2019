import React from 'react';
import simpleHOC from './SimpleHOC';


const hello = (props) => {

    return (
        <div>
            <h3>Hello Component</h3>
            <h4>Message: {props.message}</h4>
            <p>This is a functional component</p>
            <p>Generated @ { new Date().toTimeString()}</p>

            <div>
                {props.children}
            </div>

        </div>
    );
}

export default simpleHOC(hello);