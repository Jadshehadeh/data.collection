import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import CreateUser from "./components/createUser";
// import SignIn from "./pages/signIn";
// import HomePage from "./pages/home/homepage";
// import Profile from "./components/profile";
// import UsersTabel from "./components/users";
// import TicketsTable from "./components/tickets";
// import AdminDashboard from "./pages/adminDashboard";
// import UserDashboard from "./pages/userDashboard";
// import PrivateRoute from "./auth/privateRoute";
// import AdminRoute from "./auth/adminRoute";
// import PersistentDrawerLeft from "./components/sidebar";
// import CustomizedTimeline from "./components/timeline";
// import CreateTicket from "./components/createTicket";
// import CreateComment from "./components/createComment";
import Test from "./components/test";
import SignIn from "./components/signIn";
import Register from "./components/register";
import ResetPassword from "./components/resetPassword";
import ForgotPassword from "./components/forgotPassword";
import VerifyEmail from "./components/verifyEmail";

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <PersistentDrawerLeft /> */}
      <Switch>
        <Route path="/" exact component={Test} />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/register" exact component={Register} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/reset-password" exact component={ResetPassword} />
        <Route path="/verify-email" component={VerifyEmail} />
        {/* <Route path="/" exact default component={HomePage} />
        <Route path="/signin" exact component={SignIn} />
        <PrivateRoute path="/profile/:id" exact component={Profile} />
        <PrivateRoute
          path="/timeline/:id"
          exact
          component={CustomizedTimeline}
        />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute path="/create/ticket" exact component={CreateTicket} />
        <PrivateRoute path="/comments/:id" exact component={CreateComment} />

        <AdminRoute path="/createuser" exact component={CreateUser} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/admin/users" exact component={UsersTabel} />
        <AdminRoute path="/admin/tickets" exact component={TicketsTable} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
