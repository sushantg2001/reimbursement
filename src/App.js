import './App.css';
import Login from "./pages/login"
import Home from "./pages/Home/home"
import History from "./pages/History/history"
import {Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    // <HashRouter basename="/">
    //   <div className="App">
    //       <Route path='/' element={<Login />} ></Route>
    //       <Route path='home/*' element={<Home />} ></Route>
    //       <Route path='history/*' element={<History />} ></Route>
    //   </div>
    // </HashRouter>
    <History />
  );
}

export default App;