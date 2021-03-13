import React from "react"
import Card from "./Card"

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
    }
] 

function HistoryContent()
{
    return (   
        <>
        <div className="container pb-5">
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
)
}

export default HistoryContent;