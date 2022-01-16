import React from "react";
function LoginFooter() {
    const d = new Date();
    return (<>
        <div className="middle m-0 p-0 ">
            <p className="middle pt-3">
                <span className="loginfooterCopy">{"Copyright © " + d.getFullYear() + ". "}</span>
                <span className="fw-700 loginfooterCopy">IIIT-Delhi</span>
            </p>
        </div>
    </>);

}
export default LoginFooter;