import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./navbarImg.png"

import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser, useUserUpdate } from '../../UserContext'
import Cookies from 'cookies-js';

function LoginHeader() {

    useEffect(() => {
        async function fetchData() {
            // You can await here
            if (Cookies.get('osa_token')) {
                let formdata = new FormData();
                formdata.append("osa_token", Cookies.get('osa_token'))
                console.log("OSA_TOKEN", Cookies.get('osa_token'))

                let headersList = {
                    "Accept": "*/*",
                    'Content-Type': 'application/json',
                }

                let reqOptions = {
                    url: "custom_login/",
                    method: "POST",
                    headers: headersList,
                    data: formdata,
                }
                return axios.request(reqOptions).then(function (response) {
                    console.log(response.data);
                    console.log("Here1", response.data.is_admin, response.data.token)
                    localStorage.setItem('is_admin', response.data.is_admin);
                    console.log("Login successful")
                    localStorage.setItem('token', response.data.token);
                    if (response.data.is_admin === true) {
                        setIsAdmin(true);
                    }
                    else {
                        setIsAdmin(false);
                    }

                    history.push("/home")

                }).catch(function (error) {
                        console.log("Failed to login");
                        console.log(error);

                    })
            }


        }
        fetchData();


    }, []); // Or [] if effect doesn't need props or state

    let updateUser = useUserUpdate();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    function changeEmailVal(event) {
        setEmail(event.target.value);
    }
    function changePassVal(event) {
        setPassword(event.target.value);
    }
    function formSubmit(event) {
        event.preventDefault();

        let headersList = {

        }

        let formdata = new FormData();
        formdata.append("username", email);
        formdata.append("password", password);

        let reqOptions = {
            url: "/login/",
            method: "POST",
            headers: headersList,
            data: formdata,
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);


            localStorage.setItem('is_admin', response.data.is_admin);

            console.log("Login successful")
            localStorage.setItem('token', response.data.token);
            if (response.data.is_admin === true) {
                setIsAdmin(true);
            }
            else {
                setIsAdmin(false);
            }

            history.push("/home")

        })
            .catch(function (error) {
                console.log(email, password)
                setPassword("")
                setEmail("")
                console.log(error);

            })

    }
    let isAuthenticated = localStorage.getItem('token');


    useEffect(() => {
        console.log("Update in UseEffect")

        if (isAdmin === true) {
            updateUser(true);
        }

        else {
            updateUser(false);
        }


    }, [isAdmin])

    if (isAuthenticated) {
        return <Redirect to="/home" />
    }
    return (
        <>

            <div className="middle pt-5 mt-3 pb-5">
                <img src={logo} width="80%" alt="IIITD"></img>
            </div>
            <p className="middle pt-3">
                <span className="fw-700" style={{ fontSize: "150%" }}>IIIT-DELHI</span>
                <br />
                <span style={{ fontSize: "120%" }}>REIMBURSEMENT PORTAL</span>
            </p>

            <div className="row pb-3">
                <div className="container offset-xxl-2 col-8">
                    <form onSubmit={formSubmit} className="m-0 p-0 container ">
                        <div className="mb-3">
                            <label for="email" className="form-label formStyle m-0 p-0">Email address*</label>
                            <input type="text" name="email" value={email} onChange={changeEmailVal} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3 ">
                            <label for="exampleInputPassword1" className="form-label formStyle m-0 p-0">Password*</label>
                            <input type="password" name="password" value={password} onChange={changePassVal} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn  p-0 pt-1 pb-1 pl-4 pr-4 btn-block" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}>LOGIN</span></button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default LoginHeader; 
