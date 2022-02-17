
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { history } from './_helpers/history';
import { alertActions } from './actions/alert.actions'
//import { PrivateRoute } from './_components/PrivateRoute';
import {LoginPage} from './LoginPage/Login';
import Registration from './RegisterPage/register';
import Home from './Homepage/Home';
import Forgot from './ForgotPassword/ForgotPassword';
import NewPassword from './ForgotPassword/NewPassword';
//import { Alert,AlertTitle } from '@material-ui/lab';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, _action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
}

render() {
    //const { alert } = this.props;
  return (
    <>
    {/* <Alert>
          <div>{alert.message &&    
                            <AlertTitle className={`alert ${alert.type}`}>{alert.message}</AlertTitle>  */}
       <Router history={history}>
        <Switch>
          <Route path="/" component={LoginPage} exact></Route>
          <Route path="/SignUp" component={Registration} exact></Route>
          <Route path="/Home" component={Home} exact></Route>
          <Route path="/ForgotPassword" component={Forgot} exact></Route>
          <Route path="/NewPassword" component={NewPassword} exact></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router> 
      {/* </div>
    </Alert> */}
    </>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };

export default App;
