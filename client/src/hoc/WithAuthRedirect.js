import React from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    const RedirectComponent =(props) => {
            console.log("withAuthRedirect");
            //debugger;
            //if (props.isAuth===false) return <Redirect to={'/login'} />;
            
            return <Component {...props} />
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect )(RedirectComponent);

    return ConnectedRedirectComponent;
}