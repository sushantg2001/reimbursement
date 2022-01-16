import React from "react"

function Footer()
{
    const d = new Date();

    return(<>
        <footer className="bg-footer pt-1 pb-1 w-100">
            <p className="middle">
             <span className="footerText">{"Copyright © "+ d.getFullYear()+". "}</span>   
             <span className="fw-700 footerText">IIIT-Delhi</span>
            </p>
        </footer>

    </>)

}
export default Footer;