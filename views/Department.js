import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import ComingSoon from "../components/admin/shared/ComingSoon";
import DepartmentNavbar from "../components/navbar/DepartmentNavbar";
import DepartmentOverview from "../components/admin/department/Overview";

class Department extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <DepartmentNavbar />
        </div>
        <div className='mt10 mb8'>
          <Switch>
            <Route path='/Admin/Department' exact>
              <Redirect to='/Admin/Department/Overview'></Redirect>
            </Route>
            <Route
              path='/Admin/Department/Overview'
              component={(props) => <DepartmentOverview {...props} />}
            />
            <Route
              path='/Admin/Department/Contacts'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/Department/Orders'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/Department/Facilities'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/Department/Products'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
            <Route
              path='/Admin/Department/Stores'
              component={(props) => <ComingSoon {...props} />}
              exact
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Department;
