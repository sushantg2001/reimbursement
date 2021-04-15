import React from "react"
import { NavLink} from 'react-router-dom';

function Navigation()
{
    return (
        <>
            <ul class="nav nav-tabs navbar-expand-md pl-md-5  navbar-dark">
                <button className="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color:"#000"}}></span>
                </button>
                <div className="collapse navbar-collapse p-0 m-0" id="navbarNavAltMarkup">
                    <li class="nav-item ">
                        <a class="nav-link " aria-current="page">
                            <NavLink className="m-auto text-center white links" activeClassName="activeLinks"   to="/home">HOME</NavLink>
                        </a>
                    </li>
                    <li class="nav-item ">
                    {/* <Link to="home/lists" className={this.props.location.pathname === 'home/details' || (...) ? 'active' : 'notActive'}>Lists</Link> */}

                        <a className="nav-link   ">
                            <NavLink className="m-auto text-center white links" activeClassName="activeLinks"   to="/past-reimbursements">PAST REIMBURSEMENTS</NavLink> 
                        </a>
                    </li>
                    <li class="nav-item activ">
                        <a class="nav-link" >
                            <NavLink className="m-auto text-center white links" activeClassName="activeLinks"    to="/request">REQUEST ACCESS</NavLink>
                        </a>
                    </li>
                    <li class="nav-item activ">
                        <a class="nav-link" >
                            <NavLink className="m-auto text-center white links" activeClassName="activeLinks"    to="/clubs">CLUBS</NavLink>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <NavLink exact={true} className="m-auto text-center white links" activeClassName="activeLinks"  to="/">LOGOUT</NavLink>                        
                        </a>
                    </li>
                </div>
            </ul>
        </>
    )
}
export default Navigation;

