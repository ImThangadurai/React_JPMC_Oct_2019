import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const ProtectedRoute = (props) => {

    const ProtectedComponent = props.component;
    const path = props.path;
    const exact = props.exact;
    const isAuth = props.isAuth;

    return (
        <Route path={path} exact={exact}>
            {isAuth ? <ProtectedComponent/> : <Redirect to="/" />}
        </Route>
    );
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.isAuth
    }
};


export default connect(mapStateToProps)(ProtectedRoute);