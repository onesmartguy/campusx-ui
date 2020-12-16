import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import ComingSoon from "../components/admin/shared/ComingSoon";
import MarketplaceNavbar from "../components/navbar/MarketplaceNavbar";

class Marketplace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <MarketplaceNavbar />
        </div>
        <div className='mt10 mb8'>
          <Switch>
            <Route path='/Admin/Marketplace' exact>
              <Redirect to='/Admin/Marketplace/Overview'></Redirect>
            </Route>
            <Route
              path='/Admin/Marketplace/Overview'
              component={(props) => <ComingSoon {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Marketplace;
