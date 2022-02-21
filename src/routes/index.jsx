import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@doit:token"));
    if (token) {
      return setAuth(true);
    }
  }, [auth]);
  return (
    <Switch>
      <Route exact path="/">
        <Home auth={auth} />
      </Route>
      <Route path="/signup">
        <SignUp auth={auth} />
      </Route>
      <Route path="/login">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard auth={auth} />
      </Route>
    </Switch>
  );
};

export default Routes;
