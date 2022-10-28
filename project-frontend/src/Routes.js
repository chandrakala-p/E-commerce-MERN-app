import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import AdminDashBoard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashBoard from "./user/UserDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";


const Routes1 = () => {
  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/cart" exact element={<Cart />} />


          <Route path="/user/dashboard" exact
            element={
              <PrivateRoute>
                <UserDashBoard />
              </PrivateRoute>
            }
          />

          <Route path="/admin/dashboard" exact element={
            <AdminRoute> <AdminDashBoard /></AdminRoute>
          } />
          <Route path="/admin/create/category" exact element={
            <AdminRoute> <AddCategory /></AdminRoute>
          } />
          <Route path="/admin/categories" exact element={
            <AdminRoute> <ManageCategories /></AdminRoute>
          } />

          <Route path="/admin/create/product" exact element={
            <AdminRoute> <AddProduct /></AdminRoute>
          } />
          <Route path="/admin/products" exact element={
            <AdminRoute> <ManageProducts /></AdminRoute>
          } />
          <Route path="/admin/product/update/:productId" exact element={
            <AdminRoute> <UpdateProduct /></AdminRoute>
          } />




        </Routes>


      </BrowserRouter>

    </div>
  );
};

export default Routes1;
