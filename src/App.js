import './App.css';
import Login from "./pages/Login/login"
import Home from "./pages/Home/home"
import History from "./pages/History/history"
import Reimbursements from "./pages/History/Reimbursements"
import Request from "./pages/Request/Request"
import { HashRouter, Route, Switch} from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <>
      <HashRouter basename="/">
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" >
              <Home />
          </Route>
          <Route path="/past-reimbursements">
            <History />
          </Route>
          <Route path="/all-reimbursements">
            <Reimbursements />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;