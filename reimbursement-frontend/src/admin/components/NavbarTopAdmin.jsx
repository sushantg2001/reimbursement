import React from "react"
import logo from './iiitd.png'

function NavbarTopAdmin() {
    return (
        <>
            <div className="container-fluid pt-2 pl-5 pr-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 ml-0 pl-0">
                        <img src={logo} className="navbar-img" alt="IIITD"></img>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <div className="ml-auto-social social-buttons-links">
                            <a href="https://www.linkedin.com/school/iiit-delhi/?originalSubdomain=in" target="_blank" rel="noreferrer"><button className="rounded-circle btn btn-dark"><span className="fa fa-linkedin"></span> </button> </a>
                            <a href="https://www.facebook.com/IIITDelhi/" target="_blank" rel="noreferrer"><button className="rounded-circle ml-2 btn btn-dark"><span className="fa fa-facebook"></span> </button> </a>
                            <a href="https://twitter.com/IIITDelhi" target="_blank" rel="noreferrer"><button className="rounded-circle ml-2 btn btn-dark"><span className="fa fa-twitter"></span> </button> </a>
                            <a href="https://www.instagram.com/iiit.delhi/" target="_blank" rel="noreferrer"><button className="rounded-circle ml-2 btn btn-dark"><span className="fa fa-instagram"></span> </button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavbarTopAdmin;