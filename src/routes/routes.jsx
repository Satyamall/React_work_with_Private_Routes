import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Settings from "../pages/Settings";
import User from "../pages/User";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact={true} path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/dashboard/settings">
          <Settings />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/dashboard/settings/user">
          <User />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default Routes;
