import React, {useState, useEffect} from "react"
import axios from "axios"
import Table from "./Table"

function AdminHomeContent()
{
    return (   
        <>
        <div className="container  homeContainer mb-3 pb-0   ">
            <h4 className="pt-4">
                Approve Reimbursements
            </h4>
            <p className="homePageContent pt-1 ">
                Approve/Reject Reimbursement requests. In order to sort the entries based on ascending or descending orders, click on the columns.
            </p>
        </div>
        <Table/>
        </>
)
}

export default AdminHomeContent;

