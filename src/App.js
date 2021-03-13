import './App.css';
import Login from "./pages/Login/login"
import Home from "./pages/Home/home"
import History from "./pages/History/history"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/past-reimbursements">
            <History />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;