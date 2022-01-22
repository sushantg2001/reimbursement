import React, { useState, useEffect } from "react"
import Pagination from "./Pagination"
import Map from "./Map"
import { Link } from 'react-router-dom';
import axios from "axios";

function HistoryContent() {
    const [records, setRecords] = useState([]);


    useEffect(() => {
        async function fetchData() {
            // You can await here
            let recordsData = await axios.get('/reimbursement_api/', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err);
                })
            setRecords(recordsData)
            console.log(recordsData)

        }
        fetchData();


    }, []); // Or [] if effect doesn't need props or state


    const [isMap, setMap] = useState(true)
    function handleMap() {
        if (isMap) {
            setMap(false);
        }
        else {
            setMap(true);
        }
    }
    const [isChecked, setCheck] = useState(true);
    function removeCheck() {
        setCheck(false);
    }
    function updateCheck() {
        setCheck(true);
    }
    const [search, setSearch] = useState("");
    const [filteredReimbursements, setFilteredReimbursements] = useState([]);
    useEffect(() => {

        if (document.getElementById("minAmountRadio").checked) {
            setFilteredReimbursements(
                records.filter((record) =>
                    record.amount >= search
                )
            );
        }
        else if (document.getElementById("maxAmountRadio").checked) {
            setFilteredReimbursements(
                records.filter((record) =>
                    record.amount <= search
                )
            );
        }
        else if (document.getElementById("statusRadio").checked) {
            setFilteredReimbursements(
                records.filter((record) =>
                    record.status.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
        else if (document.getElementById("idRadio").checked) {
            setFilteredReimbursements(
                records.filter((record) =>
                    record.id.toLowerCase().includes(search.toLowerCase())
                )
            );
        }

    }, [search, records]);

    const recordSize = records.length
    return (
        <>
            <div className="container pb-4 mb-5 ">
                <p className="homePageContent pt-4 pb-2">
                    Look at the Past Reimbursements that you submitted with reimbursement details. Check the updated status of the requests and print your requests here.
                </p>

                <div className="input-group  flex-nowrap mb-2 mt-0">
                    <span className="input-group-text" id="addon-wrapping" style={{ borderRadius: "0px", color: "#fff", backgroundColor: "#3FADA8" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    </span>
                    <input className="form-control"
                        type="text"
                        placeholder="Filter Reimbursements"
                        onChange={(e) => setSearch(e.target.value)}
                        aria-describedby="addon-wrapping"
                        style={{ borderRadius: "0px" }}
                    />

                </div>
                <p className="pb-0 mb-0" style={{ textDecoration: "underline" }}>Search by the filters:</p>
                <div className=" pb-3 pt-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="minAmountRadio" value="option1" checked={isChecked} onClick={updateCheck} />
                        <label className="form-check-label pl-1" htmlFor="minAmountRadio">Min Amount</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maxAmountRadio" value="option2" onClick={removeCheck} />
                        <label className="form-check-label pl-1" htmlFor="maxAmountRadio">Max Amount</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="statusRadio" value="option3" onClick={removeCheck} />
                        <label className="form-check-label pl-1" htmlFor="statusRadio">Status of Reimbursement</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="idRadio" value="option4" onClick={removeCheck} />
                        <label className="form-check-label pl-1" htmlFor="idRadio">Reimbursement ID</label>
                    </div>
                </div>

                {isMap &&
                    ((recordSize > 0) ? <div id="RMap">
                        <Map records={records} />
                    </div> : <p className="middle fw-700 pt-2" style={{ fontSize: "120%" }}>Looks like you dont have any reimbursements!!</p>)}

                <div onClick={handleMap}>
                    <Link className="text-center blue-color fw-500 all-reimbursements" style={{ fontSize: "110%" }}>{isMap ? "Hide Reimbursement Graph" : "View Reimbursement Graph"}</Link>
                </div>
                <div className="mt-5">
                    {filteredReimbursements.length > 0 && (
                        <>
                            <Pagination
                                data={filteredReimbursements}
                                pageLimit={5}
                                dataLimit={10}
                                isMap={isMap}
                            />
                        </>
                    )}
                </div>

            </div>
        </>
    )
}

export default HistoryContent;
