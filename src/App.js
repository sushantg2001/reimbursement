import './App.css';
import AdminHome from "./pages/AdminHome/AdminHome"
import AdminClubs from "./pages/Clubs/AdminClub"
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
  const isAdmin = false;
  return (
    <>
    {!isAdmin && (
      <>
        <HashRouter basename="/">
        <ScrollToTop/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/past-reimbursements" component={History} />
          <Route exact path="/request" component={Request} />
          <Route exact path="/"  render={props => <Login {...props} />} />
        </Switch>
      </HashRouter>
      </>
    )}
    {
      (isAdmin) && (
        <>
          <HashRouter basename="/">
          <ScrollToTop/>
          <Switch>
            <Route exact path="/admin-home" component={AdminHome}/>
            <Route exact path="/clubs" component ={AdminClubs} />
            <Route exact path="/"  render={props => <Login {...props} />} />
          </Switch>
        </HashRouter>
        </>
      )

    }
    {/* <>
          <HashRouter basename="/">
          <ScrollToTop/>
          <Switch>
            <Route exact path="/" component={AdminHome}/>
          </Switch>
        </HashRouter>
        </> */}

    </>

  );
}

export default App;