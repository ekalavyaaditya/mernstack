import React from 'react'
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
 const protectedRoute = ({component:Component, auth, ...rest}) => {
    <Route 
    {...rest} render={props => auth.isAuthenticated ? <Component {...props}/>: <Navigate to="login"/>}
    />
}
const mapStateToProps = (state)=>({
    auth: state.auth,
})
export default connect(mapStateToProps)(protectedRoute); 