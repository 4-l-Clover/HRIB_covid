import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "./main/index";
import NotFound from "../containers/NotFound";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      {/* <Route exact path="/" component={SelectService} />
      <Route path="/loading" component={Loading} />
      <Route exact path="/preference" component={Preference} /> */}
      <Route path={`${match.url}f`} component={Main}/>
      <Route component={NotFound}/>
    </Switch>
  </div>
);

export default App;
