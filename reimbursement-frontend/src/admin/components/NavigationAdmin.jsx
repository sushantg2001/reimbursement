import React from "react"
import { NavLink } from 'react-router-dom';
import { HashRouter, Router, Switch, Redirect } from 'react-router-dom'

function NavigationAdmin() {
    return (
        <>
            {/* <HashRouter> */}
            <ul class="nav nav-tabs navbar-expand-md pl-md-5  navbar-dark">
                <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: "#000" }}></span>
                </button>
                <div className="collapse navbar-collapse p-0 m-0" id="navbarNavAltMarkup">
                    <li class="nav-item ">
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
                    <li class="nav-item ">
                        <NavLink className="m-auto text-center white links nav-link " activeClassName="activeLinks" to="/approve-requests">APPROVE REQUESTS</NavLink>
                    </li>
                    <li class="nav-item ">
                        <NavLink className="m-auto text-center white links nav-link " activeClassName="activeLinks" to="/miscellaneous">MISCELLANEOUS</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact={true} className="m-auto text-center white links nav-link" activeClassName="activeLinks" onClick={() => localStorage.clear()} to="/">LOGOUT</NavLink>
                    </li>
                </div>
            </ul>
            {/* <HashRouter /> */}
        </>
    )
}
export default NavigationAdmin;

