import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import SchoolNavbar from "../components/navbar/SchoolNavbar";
import CollegeOverview from "../components/admin/college/Overview";
import CollegeStudents from "../components/admin/college/Student";
import CampusService from "../components/admin/campusServices/CampusService";

class College extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <SchoolNavbar />
        </div>
        <div className='mt10 mb8'>
          <Switch>
            <Route path='/Admin/College' exact>
              <Redirect to='/Admin/College/Overview'></Redirect>
            </Route>
            <Route
              path='/Admin/College/Overview'
              component={(props) => <CollegeOverview {...props} />}
            />
            <Route
              path='/Admin/College/Services'
              component={(props) => <CampusService {...props} />}
              exact
            />
            <Route
              path='/Admin/College/Students'
              component={(props) => <CollegeStudents {...props} />}
              exact
            />
            <Route
              path='/Admin/College/Events'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/College/Users'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/College/Stores'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/College/Settings'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/College/Help'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default College;
