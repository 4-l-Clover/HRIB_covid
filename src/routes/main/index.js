import React from "react";
import { Route, Switch } from "react-router-dom";
import MeetingHome from "./MeetingHome"
import Inbox from "./Inbox"
import Profile from "./Profile"
import Education from "./Education"

const Main = ({ match, location }) => (
  // location.pathname === `${match.url}/daas/` ?
  // <Redirect to={`${match.url}/daas/dashboard`}/>
  // :
  <Switch>
    <Route exact path={`${match.url}/meeting`} component={MeetingHome} />
    <Route exact path={`${match.url}/inbox`} component={Inbox} />
    <Route exact path={`${match.url}/profile`} component={Profile} />
    <Route exact path={`${match.url}/education`} component={Education} />
  </Switch>
);

export default Main;
