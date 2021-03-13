import React from "react"

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
                        <div className="navbar-nav mr-auto">
                            <a className="nav-link active first-nav" aria-current="page" href="/home">HOME</a>
                            <a className="nav-link active" href="/past-reimbursements">PAST REIMBURSEMENTS</a>
                            <a className="nav-link active" href="/">LOGOUT</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigation;

