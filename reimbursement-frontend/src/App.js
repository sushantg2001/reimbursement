import './App.css';
import Login from "./pages/Login/login"
import Home from "./pages/Home/home"
import History from "./pages/History/history"
import Request from "./pages/Request/Request"
import AdminHome from "./admin/pages/AdminHome/AdminHome"
import ApproveRequest from './admin/pages/ApproveRequests/ApproveRequest';
import Miscellaneous from './admin/pages/Miscellaneous/Miscellaneous';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"
import React, { useContext } from 'react';
import { useUser, useUserUpdate } from './UserContext.js'

const checkAuth = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }
  try {

  } catch (e) {
    return false;
  }

  return true;
}
const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/' }} />
    )
  )} />
)

function App() {
  let isAdmin = useUser();
  console.log("isAdmin", isAdmin)
  return (
    <>
      {
        (isAdmin === true) ?
          <>
            <HashRouter basename="/">
              <ScrollToTop />
              <Switch>
                <AuthRoute exact path="/home" component={AdminHome} />
                <AuthRoute exact path="/approve-requests" component={ApproveRequest} />
                <AuthRoute exact path="/miscellaneous" component={Miscellaneous} />
                <Route exact path="/" render={props => <Login {...props} />} />
              </Switch>
            </HashRouter>
          </> :
          <>
            <HashRouter basename="/">
              <ScrollToTop />
              <Switch>
                <AuthRoute exact path="/home" component={Home} />
                <AuthRoute exact path="/past-reimbursements" component={History} />
                <AuthRoute exact path="/request" component={Request} />
                <Route exact path="/" render={props => <Login {...props} />} />
              </Switch>
            </HashRouter>
          </>
      }

    </>
  );
}

export default App;