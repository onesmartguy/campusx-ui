import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import CampusOverview from "../components/admin/campusx/Overview";
import CampusCollege from "../components/admin/campusx/College";
import ComingSoon from "../components/admin/shared/ComingSoon";

import CXNavbar from "../components/navbar/CXNavbar";

class Campusx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <CXNavbar />
        </div>
        <div className='mt10 mb8'>
          <Switch>
            <Route path='/Admin/Campusx' exact>
              <Redirect to='/Admin/Campusx/Overview'></Redirect>
            </Route>
            <Route
              path='/Admin/Campusx/Overview'
              component={(props) => <CampusOverview {...props} />}
            />
            <Route
              path='/Admin/Campusx/Schools'
              component={(props) => <div><p className="fntCXBlue fntSemiBold fntCXLG mb4">Schools</p><CampusCollege {...props} /></div>}
              exact
            />
            <Route
              path='/Admin/Campusx/Users'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/Campusx/Stores'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/Campusx/Settings'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/Campusx/Help'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Campusx;
