import React, { useState, useEffect } from "react"
import Card from "./Card"


const records = [
    {
        index: 1,
        purpose: "Purpose 1",
        amount: 1500,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed"
    },
    {
        index:2,
        purpose: "Purpose 2",
        amount: 1700,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Rejected"
    },
    {
        index: 3,
        purpose: "Purpose 3",
        amount: 5000,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending"
    },
    {
        index :4,
        purpose: "Purpose 4",
        amount: 1000,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending"
    },
    {
        index :5,
        purpose: "Purpose 5",
        amount: 1200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed"
    },
    {
        index :6,
        purpose: "Purpose 6",
        amount: 4000,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending"
    },
    {
        index :7,
        purpose: "Purpose 7",
        amount: 5200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed"
    },
    {
        index :8,
        purpose: "Purpose 8",
        amount: 3200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed"
    },
    {
        index :9,
        purpose: "Purpose 9",
        amount: 7200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed"
    },
    {
        index :10,
        purpose: "Purpose 10",
        amount: 200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed"
    }
] 
function HistoryContent()
{
    const recordsFinal = records.reverse();
    const [search, setSearch] = useState("");
    const [filteredReimbursements, setFilteredReimbursements] = useState([]);
    useEffect(() => {
        setFilteredReimbursements(
          recordsFinal.filter((record) =>
            record.amount >= search
          )
        );
      }, [search, recordsFinal]);

    return (   
        <>
        <div className="container pb-4 mb-5 ">
            <p className="homePageContent pt-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>

            <div class="input-group  flex-nowrap mb-4 mt-0">
                <span class="input-group-text" id="addon-wrapping" style={{borderRadius:"0px", color:"#fff", backgroundColor:"#3FADA8"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
                <input className="form-control"
                type="text"
                placeholder="Filter Reimbursements"
                onChange={(e) => setSearch(e.target.value)}
                aria-describedby="addon-wrapping"
                style={{borderRadius:"0px"}}
                />
            </div>
            <div className="row">
                {
                filteredReimbursements.map(record=>{
                    return(   
                        <Card key={record.id} description={record.description} purpose={record.purpose} amount={record.amount} status={record.status} />
                    );
                })
                }
            </div>
        
        </div>
        </>
)
}

export default HistoryContent;
