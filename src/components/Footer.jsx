import React from "react"

function Footer()
{
    const d = new Date();

    return(<>
        <div className="bg-footer pt-1 pb-1">
            <p className="middle">
             <span className="footerText">{"Copyright © "+ d.getFullYear()+". "}</span>   
             <span className="fw-700 footerText">IIIT-Delhi</span>
            </p>
        </div>

    </>)

}
export default Footer;