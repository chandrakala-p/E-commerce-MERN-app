import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { isAutheticated } from "./index";

const PrivateRoute = ({ children }) => {
  return isAutheticated ? children : <Navigate to="/signin" />




  // <Route
  //   {...rest}
  //   render={props =>
  //     isAutheticated() ? (
  //       <Component {...props} />
  //     ) : (
  //       <Navigate
  //         to={{
  //           pathname: "/signin",
  //           state: { from: props.location }
  //         }}
  //       />
  //     )
  //   }
  // />

};

export default PrivateRoute;
