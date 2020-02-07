import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Detail0 from "./detail/kpsq-secondtrial/Right";
import Detail1 from "./detail/jprz-reject-accept/Right";
import Detail3 from "./detail/jprz-wait-receivemoney/Right";
import Detail11 from "./detail/jprz-wait-accept/Right";
import IncInfo from "../userCenter/incInfo/IncInfo";
import Authorize from "../userCenter/authorize/Authorize";
// import {createBrowserHistory} from 'history';
// const customHistory = createBrowserHistory(); history={customHistory}
const FactorRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/factor/detail0" component={Detail0} />
            <Route exact path="/factor/detail1" component={Detail1} />
            <Route exact path="/factor/detail3" component={Detail3} />
            <Route exact path="/factor/detail10" component={Detail0} />
            <Route exact path="/factor/detail11" component={Detail11} />
            <Route exact path="/factor/detail20" component={IncInfo} />
            <Route exact path="/factor/detail21" component={Authorize} />
        </Switch>
    </Router>
)
export default FactorRoute;