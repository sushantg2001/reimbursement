import React from "react"
import { NavLink } from 'react-router-dom';
import { HashRouter, Router, Switch, Redirect } from 'react-router-dom'

function NavigationAdmin() {
    return (
        <>
            {/* <HashRouter> */}
            <ul className="nav nav-tabs navbar-expand-md pl-md-5  navbar-dark">
                <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: "#000" }}></span>
                </button>
                <div className="collapse navbar-collapse p-0 m-0" id="navbarNavAltMarkup">
                    <li className="nav-item ">
                        <NavLink className="m-auto text-center white links nav-link" to="/home"
                            isActive={(match, location) => {
                                if (!match) {
                                    return false;
                                }
                                return true;
                            }}

                            activeClassName="activeLinks">
                            APPROVE REIMBURSEMENTS
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="m-auto text-center white links nav-link " activeClassName="activeLinks" to="/approve-requests">APPROVE REQUESTS</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="m-auto text-center white links nav-link " activeClassName="activeLinks" to="/miscellaneous">MISCELLANEOUS</NavLink>
                    </li>
                    <li className="nav-item">
                        <a exact={true} className="m-auto text-center white links nav-link" activeClassName="activeLinks" href= "http://osa.iiitd.edu.in/" >LOGOUT</a>
                    </li>
                </div>
            </ul>

            {/* <HashRouter /> */}
        </>
    )
}
export default NavigationAdmin;

