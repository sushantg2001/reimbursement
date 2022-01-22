import React, { useState, useEffect } from "react"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

let toastStyle = {
    borderRadius: '20px',
    background: '#343a40',
    color: '#fff',
    fontSize: 'medium'
}
function RequestContent() {
    const [expand, setExpand] = useState(false);
    const [isClub, setClub] = useState(false);
    const [options, setOptions] = useState([]);
    const [rPurpose, setRPurpose] = useState("Student");
    const [rClub, setRClub] = useState("");
    const [rDescription, setRDescription] = useState("");
    function updateRDescription(event) {
        setRDescription(event.target.value);
    }

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

    function requestSubmitted(event) {
        event.preventDefault();
        console.log(rPurpose, rDescription, rClub);
        let headersList = {
            "Accept": "*/*",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        }
        let reqOptions;
        if (rPurpose === "Club") {
            reqOptions = {
                url: "/club_request_api/",
                method: "POST",
                headers: headersList,
                data: "{\n \"club\": \""+rClub+"\",\n \"description\": \""+rDescription+"\",\n \"purpose\": \""+rPurpose+"\"\n}",
            }

        }
        else {

            reqOptions = {
                url: "/type_request_api/",
                method: "POST",
                headers: headersList,
                data: "{\n \"type\": \""+rPurpose+"\",\n \"description\": \" "+rDescription +"\",\n \"purpose\": \""+rPurpose+"\"\n}",
            }

        }
        axios.request(reqOptions)
            .then(function (response) {
                console.log(response.data);
                toast('Access Request Submitted Successfully!',
                    {
                        icon: '✔️',
                        style: toastStyle,
                    }
                );
            })
            .catch(function (error) {
                console.log(error);
                toast('Error Submitting Access Request!',
                    {
                        icon: '⚠️',
                        style: toastStyle,
                    }
                );
            }).then(() => {
                window.location.reload();
            })

    }

    function handleExpand() {
        setExpand(true);
    }
    function updateClub(event) {
        const val = event.target.value;
        console.log(val);
        if (val === "Club") {
            setClub(true);
            let clubInit
            if (clubs.length > 0) {
                clubInit = clubs[0].name;
            }
            setRClub(clubInit)
        }
        else {
            setClub(false);
        }
        setRPurpose(val);
    }
    function updateRClub(event) {
        setRClub(event.target.value);
    }
    return (
        <>
            <Toaster position="top-right"
                reverseOrder={true} />
            <div className="container  homeContainer ">
                <h4 className="pt-4">
                    Submit New Access Request
                </h4>
                <p className="homePageContent pt-1 ">
                    Submit a new Access Request in order to submit new reimbursements with the access you require, once it gets approved.
                </p>
                <form onSubmit={requestSubmitted}>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="purpose" className="formStyle m-0">Purpose*</label>
                            <select required id="purpose" name="purpose" className="form-control mb-2" onChange={updateClub}>
                                {
                                    options.map((option, index) => {
                                        return (<option value={index.data} key={index} >{option.data}</option>)
                                    })
                                }
                            </select>
                            {
                                isClub &&
                                (<>
                                    <label htmlFor="clubs" className="formStyle m-0">Select Club*</label>
                                    <select id="club" name="club" className="form-control mb-2 " required onChange={updateRClub}>
                                        {
                                            clubs.map((club) => {
                                                return (<option value={club.name} key={club.id}>{club.name}</option>);
                                            })
                                        }
                                    </select>
                                </>)
                            }
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="description" className="form-label formStyle m-0">Description*</label>
                            <textarea required className="form-control mb-2" id="exampleFormControlTextarea1"
                                rows={expand ? "3" : "1"}
                                style={{ resize: "none" }}
                                placeholder="Enter access request details"
                                onClick={handleExpand}
                                value={rDescription}
                                onChange={updateRDescription}></textarea>
                            <button type="submit" className="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}>SUBMIT</span></button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default RequestContent;