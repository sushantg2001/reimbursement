import React from "react"
import Card from "./Card"
import { Link } from 'react-router-dom';


const records = [
    {
        index: 1,
        purpose: "Purpose 1",
        amount: "1500",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Approved"
    },
    {
        index:2,
        purpose: "Purpose 2",
        amount: "1700",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Rejected"
    },
    {
        index: 3,
        purpose: "Purpose 3",
        amount: "5000",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending"
    },
    {
        index :4,
        purpose: "Purpose 4",
        amount: "1000",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending"
    },
    {
        index :5,
        purpose: "Purpose 5",
        amount: "1200",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Approved"
    },
    {
        index :6,
        purpose: "Purpose 6",
        amount: "4000",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending"
    },
    {
        index :7,
        purpose: "Purpose 7",
        amount: "5200",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Approved"
    },
    {
        index :8,
        purpose: "Purpose 8",
        amount: "3200",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Approved"
    },
    {
        index :9,
        purpose: "Purpose 9",
        amount: "7200",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Approved"
    },
    {
        index :10,
        purpose: "Purpose 10",
        amount: "200",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Approved"
    }
] 
function FullHistoryContent()
{
    return (   
        <>
        <div className="container mb-5">
            <p className="homePageContent pt-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>
            <div className="row">
                {records.map(record=>{
                    return(   
                        <Card key={record.id} description={record.description} purpose={record.purpose} amount={record.amount} status={record.status} />
                    );
                })}
            </div>

        </div>
        </>
    );
}

function HistoryContent()
{
    const HigherBound = records.length;
    var lowerBound;
    if(records.length <=5)
    {
        lowerBound=0;
    }
    else{
        lowerBound = HigherBound - 5;
    }
    const topRecords = records.slice(lowerBound, HigherBound);
    return (   
        <>
        <div className="container pb-5">
            <p className="homePageContent pt-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>
            <div className="row">
                {
                topRecords.map(record=>{
                    return(   
                        <Card key={record.id} description={record.description} purpose={record.purpose} amount={record.amount} status={record.status} />
                    );
                })
                }
            </div>
            <div >
                <Link className="text-center blue-color fw-500 all-reimbursements" style={{fontSize:"110%"}} to="/all-reimbursements">View All Reimbursements</Link>
                </div>
        

        </div>
        </>
)
}

export default HistoryContent;
export {FullHistoryContent};