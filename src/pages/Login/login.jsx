import React from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
function Login()
{
    return (
        <>
            <div className="row m-0 p-0 ">
                <div className="col-lg-5 col-md-5 col-sm-12 m-0 p-0">
                    <LoginHeader />
                    <LoginFooter />

                </div>
                <div className="col-lg-7 col-md-7 d-sm-none d-md-block d-none campus-bg mr-0 pr-0 p-0 m-0">
                    <img src="assets/cover.png" alt="banner" className="d-flex w-100 h-100 img-fluid img-container"></img>
                </div>

            </div>
        </>
    );
}
export default Login;
