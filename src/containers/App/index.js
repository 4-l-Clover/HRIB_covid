import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import MainApp from "./MainApp";
import SignIn from "../SignIn";
import Signup from "../Signup";

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class App extends Component {

  render() {
    const {match} = this.props;
    return (
        <div>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={Signup} />
            <RestrictedRoute
              path={`${match.url}`}
              authUser={true}
              component={MainApp}
            />
          </Switch>
        </div>
    );
  }
}

export default App;
