import React from "react";
function LoginFooter()
{
    const d= new Date();
    return (<>
        <div className="middle m-0 p-0 ">
            {/* <div className="loginFooterText mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus aliquet mauris, et feugiat nisl aliquet eu. Donec ante nisi, condimentum eget lacus at, gravida aliquam mi. Morbi tincid
            </div>
            <div className="loginFooterText">
            For any technical query, email <span style={{color:"#cc0000"}}>nandika19064@iiitd.ac.in</span> or <span style={{color:"#cc0000"}}>sushant19450@iiitd.ac.in</span> 
            </div> */}
            <p className="middle pt-3">
             <span className="loginfooterCopy">{"Copyright © "+ d.getFullYear()+". "}</span>   
             <span className="fw-700 loginfooterCopy">IIIT-Delhi</span>
            </p>
        </div>
    </>);

}
export default LoginFooter;