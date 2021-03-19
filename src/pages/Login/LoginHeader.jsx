import React from "react";
function LoginHeader()
{
    return (
        <>
            <div className="middle pt-5 mt-3 pb-5">
                <img src="https://www.iiitd.ac.in/sites/default/files/images/logo/style3colorlarge.jpg" width="80%" alt="IIITD"></img>
            </div>
            <p className="middle pt-5">
                <span className="fw-700" style={{fontSize:"150%"}}>IIIT-DELHI</span>
                <br/>
                <span style={{fontSize:"120%"}}>REIMBURSEMENT PORTAL</span>
            </p>
            <div className="middle pt-3 pb-5">
            <a className="btn btn-social btn-google">
                <span className="fa fa-google"></span> Sign in with IIITD Email</a>
            </div>
        </>
    );
}
export default LoginHeader;