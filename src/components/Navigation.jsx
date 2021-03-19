import React from "react"
import { NavLink} from 'react-router-dom';

function Navigation()
{
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark p-0 m-0">
                <div className="container-fluid">
                    <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto ml-3">
                            <div className="nav-link first-nav ml-2 first-nav" aria-current="page">
                                <NavLink className="m-auto text-center white links" activeClassName="activeLinks" to="/home">HOME</NavLink></div>
                            <div className="nav-link first-nav ml-2 " >
                                <NavLink className="m-auto text-center white links" activeClassName="activeLinks" to="/past-reimbursements">PAST REIMBURSEMENTS</NavLink></div>  
                            <div className="nav-link first-nav ml-2 " >
                                <NavLink className="m-auto text-center white links" activeClassName="activeLinks"  to="/request">REQUEST ACCESS</NavLink></div> 
                            <div className="nav-link first-nav ml-2 " >
                                <NavLink exact={true} className="m-auto text-center white links" activeClassName="activeLinks"  to="/">LOGOUT</NavLink></div>                          </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigation;

