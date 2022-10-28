import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { isAutheticated } from "./index";

const AdminRoute = ({ children }) => {
  return isAutheticated && isAutheticated().user.role === 1 ? children : <Navigate to="/signin" />;



  // <Route
  //   {...rest}
  //   render={props =>
  //     isAutheticated() && isAutheticated().user.role === 1 ? (
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

export default AdminRoute;
