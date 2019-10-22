import React from 'react';

// HOC ==> function(is not a component)
const simpleHOC = (WrappedComponent) => {

    //should return a component(functional or class)
    return (props) =>{
        return (
            <div style={{border: "2px solid yellow"}}>
                <WrappedComponent {...props} />
            </div>
        );
    } 
}
export default simpleHOC;