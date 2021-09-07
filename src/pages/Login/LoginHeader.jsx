import React, { useState } from "react";
import axios from "axios";

import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";


function LoginHeader()
{
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function changeEmailVal(event)
    {
        setEmail(event.target.value);
    }
    function changePassVal(event)
    {
        setPassword(event.target.value);
    }
    function formSubmit(event)
    {
        event.preventDefault();
        axios.post('/login/', {
            username: email,
            password: password
    }
        )
        .then(function (response) {
            console.log("Login successful")
            localStorage.setItem('token', response.data.token);
           history.push("/admin-home");
        })
        .catch(function (error) {
console.log("Failed to login");
        //    window.location.reload();
            console.log(error);

        });



    }
    return (
        <>
            <div className="middle pt-5 mt-3 pb-5">
                <img src="https://www.iiitd.ac.in/sites/default/files/images/logo/style3colorlarge.jpg" width="80%" alt="IIITD"></img>
            </div>
            <p className="middle pt-3">
                <span className="fw-700" style={{fontSize:"150%"}}>IIIT-DELHI</span>
                <br/>
                <span style={{fontSize:"120%"}}>REIMBURSEMENT PORTAL</span>
            </p>
            {/* <div className="middle pt-3 pb-5">
            <a className="btn btn-social btn-google">
                <span className="fa fa-google"></span> Sign in with IIITD Email</a>
            </div> */}
            <div class="row pb-3">
                <div class="container offset-xxl-2 col-8">
                    <form onSubmit={formSubmit} class="m-0 p-0 container ">
                        <div class="mb-3">
                            <label for="email" class="form-label formStyle m-0 p-0">Email address*</label>
                            <input type="text" name="email" value={email} onChange={changeEmailVal} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        </div>
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label formStyle m-0 p-0">Password*</label>
                            <input type="password" name="password" value={password} onChange={changePassVal} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn  p-0 pt-1 pb-1 pl-4 pr-4 btn-block"  style={{backgroundColor:"#3FADA8", borderRadius:"30px"}}><span className="fw-700 white" style={{fontSize:"80%"}}>LOGIN</span></button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default LoginHeader;