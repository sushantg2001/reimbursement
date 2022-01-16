import React from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import banner from "./cover.png"

/* This is the login page for the students.
LoginHeader contains Login form components and login.
LoginFooter contains copyright footer. */

function Login() {
    let height_ = window.innerHeight;
    let width_ = window.innerWidth;
    return (
        <>
            <div className="row m-0 p-0 ">
                <div className="col-lg-5 col-md-5 col-sm-12 m-0 p-0">
                    <LoginHeader />
                    <LoginFooter />

                </div>
                <div className="col-lg-7 col-md-7 d-sm-none d-md-block d-none campus-bg mr-0 pr-0 p-0 m-0" style={{ height: height_, width: width_ }}>
                    <img src={banner} alt="banner" className="d-flex w-100 h-100 img-fluid img-container"></img>
                </div>

            </div>
        </>
    );
}
export default Login;
