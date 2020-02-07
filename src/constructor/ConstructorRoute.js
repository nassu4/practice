import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Detail0 from "./detail/kpsq-wait-sign/Right";
import Detail1 from "./detail/jprz-reject-receivemoney/Right";
import Detail2 from "./detail/jpzr-wait-sign/Right";
import Detail4 from "./detail/jprz-wait-givemoney/Right";
import Detail5 from "./detail/kpsq-already-sign/Right";
import Detail6 from "./detail/kpsq-reject-firsttrial/Right";
import Detail7 from "./detail/kpsq-reject-secondtrial/Right";
import Detail8 from "./detail/kpsq-wait-secondtrial/Right";
import Detail9 from "./detail/jprz-wait-accept/Right";
import Detail10 from "./detail/kpsq-wait-firsttrial/Right";
import Detail11 from "./detail/jprz-wait-receivemoney/Right";
import Application0 from "./application/kpsq/Right";
import Application1 from "./application/jprz/Right";
import Application2 from "./application/jpzr/Right";
import IncInfo from "../userCenter/incInfo/IncInfo";
import Authorize from "../userCenter/authorize/Authorize";
// import {createBrowserHistory} from 'history';
// const customHistory = createBrowserHistory(); history={customHistory}
const ConstructorRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/constructor/detail0" component={Detail0} />
            <Route exact path="/constructor/detail1" component={Detail1} />
            <Route exact path="/constructor/detail2" component={Detail2} />
            <Route exact path="/constructor/detail4" component={Detail4} />
            <Route exact path="/constructor/detail5" component={Detail5} />
            <Route exact path="/constructor/detail6" component={Detail6} />
            <Route exact path="/constructor/detail7" component={Detail7} />
            <Route exact path="/constructor/detail8" component={Detail8} />
            <Route exact path="/constructor/detail9" component={Detail9} />
            <Route exact path="/constructor/detail10" component={Detail10} />
            <Route exact path="/constructor/detail11" component={Detail11} />
            <Route exact path="/constructor/detail12" component={Detail0} />
            <Route exact path="/constructor/detail20" component={IncInfo} />
            <Route exact path="/constructor/detail21" component={Authorize} />
            <Route exact path="/constructor/application0" component={Application0} />
            <Route exact path="/constructor/application1" component={Application1} />
            <Route exact path="/constructor/application2" component={Application2} />
        </Switch>
    </Router>
)
export default ConstructorRoute;