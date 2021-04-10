import React, { useState, useEffect } from "react"
import Card from "./Card"
import Map from "./Map"
import { Link } from 'react-router-dom';

const records = [
    {
        index: 1,
        purpose: "Purpose 1",
        amount: 1500,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed",
        id: "ID#1234",
        date: "03-12-12",
        processed: "12-12-12"
    },
    {
        index:2,
        purpose: "Purpose 2",
        amount: 1700,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Rejected",
        id: "ID#1235",
        date: "04-12-12",
        processed: ""
    },
    {
        index: 3,
        purpose: "Purpose 3",
        amount: 5000,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending",
        id: "ID#1236",
        date: "05-12-12",
        processed: ""
    },
    {
        index :4,
        purpose: "Purpose 4",
        amount: 1000,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending",
        id: "ID#1237",
        date: "06-12-12",
        processed: ""
    },
    {
        index :5,
        purpose: "Purpose 5",
        amount: 1200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed",
        id: "ID#1238",
        date: "07-12-12",
        processed: ""
    },
    {
        index :6,
        purpose: "Purpose 6",
        amount: 4000,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Pending",
        id: "ID#1239",
        date: "08-12-12",
        processed: ""
    },
    {
        index :7,
        purpose: "Purpose 7",
        amount: 5200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed",
        id: "ID#1240",
        date: "09-12-12",
        processed: "12-12-12"
    },
    {
        index :8,
        purpose: "Purpose 8",
        amount: 3200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed",
        id: "ID#1241",
        date: "10-12-12",
        processed: "12-12-12"
    },
    {
        index :9,
        purpose: "Purpose 9",
        amount: 7200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed",
        id: "ID#1242",
        date: "11-12-12",
        processed: "12-12-12"
    },
    {
        index :10,
        purpose: "Purpose 10",
        amount: 200,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
        status:"Completed",
        id: "ID#1243",
        date: "12-12-12",
        processed: "12-12-12"
    }
] 
function HistoryContent()
{
    const [isMap, setMap] = useState(false)
    function handleMap()
    {
        if(isMap)
        {
            setMap(false);
        }
        else{
            setMap(true);
        }
    }
    const [isChecked, setCheck] = useState(true);
    function removeCheck()
    {
        setCheck(false);
    }
    function updateCheck()
    {
        setCheck(true);
    }
    const recordsFinal = records.reverse();
    const [search, setSearch] = useState("");
    const [filteredReimbursements, setFilteredReimbursements] = useState([]);
    useEffect(() => {

        if(document.getElementById("minAmountRadio").checked)
        {   
            setFilteredReimbursements(
                recordsFinal.filter((record) =>
                record.amount >= search
                )
            );
        }
        else if(document.getElementById("maxAmountRadio").checked)
        {   
            setFilteredReimbursements(
                recordsFinal.filter((record) =>
                record.amount <= search
                )
            );
        }
        else if(document.getElementById("statusRadio").checked)
        {   
            setFilteredReimbursements(
                recordsFinal.filter((record) =>
                record.status.toLowerCase().includes(search.toLowerCase()) 
                )
            );
        }
        else if(document.getElementById("idRadio").checked)
        {   
            setFilteredReimbursements(
                recordsFinal.filter((record) =>
                record.id.toLowerCase().includes(search.toLowerCase()) 
                )
            );
        }

      }, [search, recordsFinal]);

      const recordSize = records.length
    return (   
        <>
        <div className="container pb-4 mb-5 ">
            <p className="homePageContent pt-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>

            <div class="input-group  flex-nowrap mb-2 mt-0">
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
            <div className="middle pl-2 pr-2 pb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="minAmountRadio" value="option1" checked={isChecked} onClick={updateCheck}/>
                    <label class="form-check-label pl-1" for="minAmountRadio">Min Amount</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maxAmountRadio" value="option2" onClick={removeCheck}/>
                    <label class="form-check-label pl-1" for="maxAmountRadio">Max Amount</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="statusRadio" value="option3" onClick={removeCheck}/>
                    <label class="form-check-label pl-1" for="statusRadio">Status of Reimbursement</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="idRadio" value="option4" onClick={removeCheck}  />
                    <label class="form-check-label pl-1" for="idRadio">Reimbursement ID</label>
                </div>
            </div>
            <div onClick={handleMap}>
                <Link className="text-center blue-color fw-500 all-reimbursements" style={{fontSize:"110%"}}>{isMap?  "Hide Reimbursement Graph" : "View Reimbursement Graph"}</Link>
            </div>   
        {isMap &&
            ((recordSize>0)? <div id="RMap">
                <Map records={records} />
            </div>: <p className="middle fw-700 pt-2" style={{fontSize:"120%"}}>Looks like you dont have any reimbursements!!</p>)}

            <div className="row mt-5">
                {
                filteredReimbursements.map(record=>{
                    return(   
                        <Card 
                        key={record.id}
                        description={record.description} 
                        purpose={record.purpose} 
                        amount={record.amount} 
                        status={record.status} 
                        id={record.id}
                        date={record.date}
                        processed={record.processed} />
                    );
                })
                }
            </div>
        
        </div>
        </>
)
}

export default HistoryContent;
