import React from "react"
import { Link } from 'react-router-dom';

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
                                <Link className="m-auto text-center white" to="/">HOME</Link></div>
                            <div className="nav-link first-nav ml-2" >
                                <Link className="m-auto text-center white" to="/past-reimbursements">PAST REIMBURSEMENTS</Link></div>  
                            <div className="nav-link first-nav ml-2" >
                                <Link className="m-auto text-center white" to="/request">REQUEST ACCESS</Link></div> 
                            <div className="nav-link first-nav ml-2" >
                                <Link className="m-auto text-center white" to="/login">LOGOUT</Link></div>                          </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigation;

