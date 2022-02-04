import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import axios from "axios";
import {UserProvider} from "./UserContext.js"

axios.defaults.baseURL = 'http://reimbursement.osa.iiitd.edu.in/api/';
// axios.defaults.bareURL = 'https://reimbursement-app.herokuapp.com/api'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


ReactDOM.render(
  <>
    <UserProvider>
      <App />
    </UserProvider>
  </>
  ,
  document.getElementById('root')
);
