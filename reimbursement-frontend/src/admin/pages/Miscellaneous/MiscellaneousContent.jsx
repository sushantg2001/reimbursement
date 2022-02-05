import React, { useState, useEffect } from "react";
import Card from "./Card"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import Option from "./Option";

let styleObject = {
    borderRadius: '20px',
    background: '#343a40',
    color: '#fff',
    fontSize: 'medium'
}
function MiscellaneousContent() {
    const [options, setOptions] = useState([]);
    const [clubName, setClubName] = useState("");
    const [clubBudget, setClubBudget] = useState("");
    const [clubDescription, setClubDescription] = useState("");
    useEffect(() => {
        async function fetchData() {
            // You can await here
            let recordsData = await axios.get('/type_api/', {
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
            setOptions(recordsData)
            console.log(recordsData)
            // ...
        }
        fetchData();
    }, []); // Or [] if effect doesn't need props or state


    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            // You can await here
            let recordsData = await axios.get('/club_api/', {
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
            setClubs(recordsData)
            console.log(recordsData)
            // ...
        }
        fetchData();
    }, []);
    const recordsFinal = clubs
    const [search, setSearch] = useState("");
    const [filteredClubs, setFilteredClubs] = useState([]);
    useEffect(() => {
        setFilteredClubs(
            recordsFinal.filter((record) =>
                record.name.toLowerCase().includes(search.toLowerCase())
            )
        );

    }, [search, recordsFinal]);

    const [expand, setExpand] = useState(false);
    function handleExpand() {
        setExpand(true);
    }
    function changeClubName(event) {
        setClubName(event.target.value);
    }
    function changeClubBudget(event) {
        setClubBudget(event.target.value);
    }
    function changeClubDescription(event) {
        setClubDescription(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let formdata = new FormData();
        formdata.append("name", clubName);
        formdata.append("budget", clubBudget);
        formdata.append("description", clubDescription);
        console.log(formdata)
        let headersList = {
            "Accept": "*/*",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "/club_api/",
            method: "POST",
            headers: headersList,
            data: formdata
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
            toast('Club Added Successfully!',
                {
                    icon: '✔️',
                    style: styleObject,
                }
            );

        }).catch(function (error) {
            console.log(error);
            toast('Error Adding Club!',
                {
                    icon: '⚠️',
                    style: styleObject,
                }
            );

        }).then(() => {
            window.location.reload();
        })
    }
    const [newOption, setNewOption] = useState("");
    function changeNewOption(event) {
        setNewOption(event.target.value)
    }
    function addNewOption(event) {
        event.preventDefault();
        let formdata = new FormData();
        formdata.append("data", newOption);
        console.log(formdata)
        let headersList = {
            "Accept": "*/*",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "/type_api/",
            method: "POST",
            headers: headersList,
            data: formdata
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
            toast('Option Added Successfully!',
                {
                    icon: '✔️',
                    style: styleObject,
                }
            );

        }).catch(function (error) {
            console.log(error);
            toast('Error Adding Option!',
                {
                    icon: '⚠️',
                    style: styleObject,
                }
            );

        }).then(() => {
            window.location.reload();
        })

    }

    return (
        <>
            <Toaster position="top-right"
                reverseOrder={true} />

            <div className="container pl-5 pr-5 homeContainer mb-3 pb-0">
                <h4 className="pt-4 pb-2">
                    Miscellaneous
                </h4>
                <div className="card m-auto shadow">
                    <div className="card-body">
                        <h5 className="homePageContent pt-1" style={{ textDecoration: "underline" }}>Add Options</h5>
                        <p className="p-0 m-0">Current Options: </p>
                        {options.map((option, index) => {
                            return <Option data={option.data} key={index} />
                        })}

                        <div className="input-group  flex-nowrap mt-3 w-25">

                            <form onSubmit={addNewOption}>
                                <input required className="form-control"
                                    type="text"
                                    placeholder="Add option"
                                    onChange={changeNewOption}
                                    value={newOption}
                                    aria-describedby="addon-wrapping"
                                    style={{ borderRadius: "0px" }}
                                />
                                <button type="submit" className="btn reimbBtn btn-lg p-0 pt-1 pb-1 pl-4 pr-4 mt-2" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}> + ADD OPTION</span></button>

                            </form>




                        </div>
                    </div>
                </div>

                        <br>

                        </br>
                <div className="card m-auto shadow">
                    <div className="card-body">
                        <h5 className="homePageContent pt-1" style={{ textDecoration: "underline" }}>Add Clubs</h5>
                        <form onSubmit={handleSubmit} >
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <label htmlFor="clubName" className="formStyle m-0">Name*</label>
                                    <input required type="text" className="form-control mb-2" name="clubName" onChange={changeClubName} value={clubName} />
                                    <label htmlFor="clubBudget" className="formStyle m-0">Budget*</label>
                                    <input required type="number" className="form-control mb-2" name="clubBudget" onChange={changeClubBudget} value={clubBudget} />

                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <label htmlFor="clubDescription" className="form-label formStyle m-0">Description*</label>
                                    <textarea className="form-control mb-2" id="exampleFormControlTextarea1"
                                        required
                                        rows={expand ? "4" : "1"}
                                        style={{ resize: "none" }}
                                        placeholder="Enter club details"
                                        onClick={handleExpand}
                                        name="clubDescription"
                                        onChange={changeClubDescription}
                                        value={clubDescription}
                                    >

                                    </textarea>
                                    <button type="submit" className="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}>+ ADD CLUB</span></button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

<br></br>
                <div className="card m-auto shadow">
                    <div className="card-body">
                        <h5 className="homePageContent pt-1" style={{ textDecoration: "underline" }}>Edit Clubs</h5>
                        <div className="input-group  flex-nowrap mb-2 mt-3 w-25">

                            <input className="form-control"
                                type="text"
                                placeholder="Search Clubs"
                                onChange={(e) => setSearch(e.target.value)}
                                aria-describedby="addon-wrapping"
                                style={{ borderRadius: "0px" }}
                            />

                            <span className="input-group-text" id="addon-wrapping" style={{ borderRadius: "0px", color: "#fff", backgroundColor: "#3FADA8" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            </span>
                        </div>
                        <div className="row mt-3 mb-5">
                            {
                                filteredClubs.map((record, index) => {
                                    return (
                                        <Card
                                            key={index}
                                            description={record.description}
                                            name={record.name}
                                            budget={record.budget}
                                            id={record.id}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>
                <br></br>


            </div>

        </>
    );
}
export default MiscellaneousContent;