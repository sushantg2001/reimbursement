import React from "react"

function NavbarTop()
{
    return(
        <>
            <div className="container-fluid pt-2 pl-5 pr-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 ml-0 pl-0">
                        <img src="https://www.iiitd.ac.in/sites/default/files/images/logo/style3colorlarge.jpg" className="navbar-img" alt="IIITD"></img>
                    </div>
                    <div className="col-md-6 col-sm-12 ">
                        <div className="ml-auto-social social-buttons-links">
                            <a href="/" target="_blank"><button className="rounded-circle btn btn-dark"><span className="fa fa-linkedin"></span> </button> </a>
                            <a href="/" target="_blank"><button className="rounded-circle ml-2 btn btn-dark"><span className="fa fa-facebook"></span> </button> </a>
                            <a href="/" target="_blank"><button className="rounded-circle ml-2 btn btn-dark"><span className="fa fa-twitter"></span> </button> </a>
                            <a href="/" target="_blank"><button className="rounded-circle ml-2 btn btn-dark"><span className="fa fa-instagram"></span> </button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavbarTop;