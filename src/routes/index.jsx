import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
