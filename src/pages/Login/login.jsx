import React from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
function Login()
{
    return (
        <>
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-8 col-11">
                    <LoginHeader />
                    <LoginFooter />

                </div>
                <div className="col-lg-7 col-md-6 col-sm-4 col-1 campus-bg mr-0 pr-0">

                </div>

            </div>
        </>
    );
}
export default Login;