import './App.css';
import Login from "./pages/Login/login"
import Home from "./pages/Home/home"
import History from "./pages/History/history"
import Request from "./pages/Request/Request"
import Clubs from "./pages/Clubs/Clubs"
import { HashRouter, Route, Switch} from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <>
      <HashRouter basename="/">
        <ScrollToTop/>
        <Switch>
          <Route path="/home" >
              <Home />
          </Route>
          <Route path="/past-reimbursements">
            <History />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/clubs">
            <Clubs />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;