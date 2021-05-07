import './App.css';
import Login from "./pages/Login/login"
import Home from "./pages/Home/home"
import History from "./pages/History/history"
import Request from "./pages/Request/Request"
import Clubs from "./pages/Clubs/Clubs"
import { HashRouter, Route, Switch,   Redirect} from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"

const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (!token ) {
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
  return (
    <>
      <HashRouter basename="/">
        <ScrollToTop/>
        <Switch>
          <AuthRoute exact path="/home" component={Home}/>
          <AuthRoute exact path="/past-reimbursements" component={History} />
          <AuthRoute exact path="/request" component={Request} />
          <AuthRoute exact path="/clubs" component ={Clubs} />
          <Route exact path="/"  render={props => <Login {...props} />} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;