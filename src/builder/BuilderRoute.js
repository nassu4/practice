import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Detail0 from "./detail/kpsq-firsttrial/Right";
import IncInfo from "../userCenter/incInfo/IncInfo";
import Authorize from "../userCenter/authorize/Authorize";
// import {createBrowserHistory} from 'history';
// const customHistory = createBrowserHistory(); history={customHistory}
const ConstructorRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/builder/detail0" component={Detail0} />
            <Route exact path="/builder/detail10" component={Detail0} />
            <Route exact path="/builder/detail20" component={IncInfo} />
            <Route exact path="/builder/detail21" component={Authorize} />
        </Switch>
    </Router>
)
export default ConstructorRoute;