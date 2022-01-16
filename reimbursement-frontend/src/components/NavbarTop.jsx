import React from "react"

function NavbarTop()
{
    return(
        <>
            <div className="container-fluid pt-2 pl-5 pr-5">
                <nav className="navbar">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 ml-0 pl-0">
                            <img src="https://www.iiitd.ac.in/sites/default/files/images/logo/style3colorlarge.jpg" className="navbar-img" alt="IIITD"></img>
                        </div>
                        <span className="col-md-6 d-none d-md-block nav-text  navbar-text">
                            REIMBURSEMENT PORTAL
                        </span>
                    </div>

                </nav>

            </div>
        </>
    )
}
export default NavbarTop;