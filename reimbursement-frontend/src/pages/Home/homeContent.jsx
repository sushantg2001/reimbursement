import React, { useState, useEffect } from "react"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';


let toastStyle = {
    borderRadius: '20px',
    background: '#343a40',
    color: '#fff',
    fontSize: 'medium'
}
function HomeContent() {
    const [options, setOptions] = useState([{ data: "Student" }]);
    const [RName, setRName] = useState("");
    const [RAmount, setRAmount] = useState();
    const [RPurpose, setRPurpose] = useState("Student");
    const [RClub, setRClub] = useState("");
    const [RDescription, setRDescription] = useState("");
    function updateRName(event) {
        setRName(event.target.value);
    }
    function updateRAmount(event) {
        setRAmount(event.target.value);
    }

    function updateRDescription(event) {
        setRDescription(event.target.value);
    }
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        async function fetchData() {

            let headersList = {
                "Accept": "*/*",
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }

            let reqOptions = {
                url: "/user_api/",
                method: "GET",
                headers: headersList,
            }

            axios.request(reqOptions).then(function (res) {
                console.log(res.data)
                let tempVar = res.data[0];
                let typeReq = tempVar.type_requests;
                let clubReq = tempVar.club_requests;
                for (let i = 0; i < typeReq.length; i++) {
                    let obj_ = typeReq[i];
                    if (obj_ != null && obj_ !== "Student") {
                        let tempObj = {
                            data: obj_
                        }
                        setOptions(prevState => {
                            return [...prevState, tempObj]
                        })

                    }
                }
                for (let i = 0; i < clubReq.length; i++) {
                    let obj_ = clubReq[i];
                    if (obj_ != null) {
                        let pos_ = obj_.search(",")
                        let name_ = obj_.slice(0, pos_);
                        let budget_ =parseFloat( obj_.slice(pos_+1, obj_.length))


                        let tempObj = {
                            name: name_,
                            budget: budget_
                        }
                        setClubs(prevState => {
                            return [...prevState, tempObj]
                        })

                    }
                }

            })
                .catch(err => {
                    console.log(err);
                })
            // ...
        }
        fetchData();
    }, []);

    const [expand, setExpand] = useState(false);
    const [isClub, setClub] = useState(false);
    let clubInit = 0;
    if (clubs.length > 0) {
        clubInit = clubs[0].budget;
    }
    const [clubBudgetLeft, setClubBudgetLeft] = useState(clubInit);

    function updateClubBudgetLeft() {
        var x = document.getElementById("club").value;
        setRClub(x);
        let findClub = clubs.find((val) => {
            return val.name === x
        })
        setClubBudgetLeft(findClub.budget);
    }
    function handleExpand() {
        setExpand(true);
    }
    var d = new Date();
    var today = d.getFullYear() + "-";
    if ((d.getMonth() + 1) < 10 && d.getDate() < 10) {
        today = today + "0" + (d.getMonth() + 1) + "-0" + d.getDate();
    }
    else if ((d.getMonth() + 1) < 10) {
        today = today + "0" + (d.getMonth() + 1) + "-" + d.getDate()
    }
    else if (d.getDate < 10) {
        today = today + (d.getMonth() + 1) + "-0" + d.getDate();
    }
    else {
        today = today + (d.getMonth() + 1) + "-0" + d.getDate();
    }
    function updateClub(event) {
        const val = event.target.value;
        setRPurpose(val);
        console.log(val);
        if (val === "Club") {
            setClub(true);
            if (clubs.length > 0) {
                clubInit = clubs[0].budget;
            }
            setClubBudgetLeft(clubInit)

        }
        else {
            setClub(false);
        }
    }
    function handleSubmitReimbursement(event) {
        event.preventDefault();
        console.log(RName, RAmount, RPurpose, RDescription, RClub);
        let headersList = {
            "Accept": "*/*",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        let formdata = new FormData();
        formdata.append("name", RName);
        formdata.append("purpose", RPurpose);
        formdata.append("amount", RAmount);
        formdata.append("description", RDescription)
        if (RClub === "") {

        }
        else {
            formdata.append("club", RClub);
        }

        let reqOptions = {
            url: "/reimbursement_api/",
            method: "POST",
            headers: headersList,
            data: formdata,
        }

        axios.request(reqOptions)
            .then(function (response) {
                console.log(response.data);
                toast('Reimbursement Submitted Successfully!',
                    {
                        icon: '✔️',
                        style: toastStyle,
                    }
                );
            })
            .catch(function (error) {
                console.log(error);
                toast('Error Submitting Reimbursement!',
                    {
                        icon: '⚠️',
                        style: toastStyle,
                    }
                );
            }).then(() => {
                window.location.reload();
            })
    }

    return (
        <>
            <div className="container  homeContainer mb-5  ">
                <Toaster position="top-right"
                    reverseOrder={true} />
                <h4 className="pt-4">
                    Submit New Reimbursement
                </h4>
                <p className="homePageContent pt-1 ">
                    Submit your reimbursement claims by filling in the form with appropriate purpose, date of event, description and amount. Check the status of the reimbursement of email and under Past Reimbursements tab.
                </p>
                <form onSubmit={handleSubmitReimbursement}>
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <label for="Name" className="formStyle m-0">Name*</label>
                            <input type="text" class="form-control mb-2 " required value={RName} onChange={updateRName} />
                            <label for="amount" className="formStyle m-0">Amount Required*</label>
                            <input type="number" class="form-control mb-2 " required value={RAmount} onChange={updateRAmount} />
                            <label for="purpose" className="formStyle m-0">Purpose*</label>
                            <select id="purpose" name="purpose" className="form-control mb-2 " required onChange={updateClub}>
                                {
                                    options.map((option, index) => {
                                        return (<option value={option.data} key={index}  >{option.data}</option>);
                                    })
                                }
                            </select>
                            {
                                isClub &&
                                (<>
                                    <label for="clubs" className="formStyle m-0">Select Club*</label>
                                    <select id="club" name="club" className="form-control mb-2 " required onChange={updateClubBudgetLeft} >
                                        {
                                            (clubs).map((club, index) => {
                                                return (<option value={club.name} key={index}>{club.name}</option>);
                                            })
                                        }
                                    </select>
                                </>)
                            }
                            {isClub && <p className="p-0 m-0 pull-right"><span className="club-budget-text">Club Budget Left:</span> <span className="club-budget-amount-text">₹{clubBudgetLeft}</span></p>}
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <label for="start" className="formStyle m-0">Date of event</label>
                            <input type="date" id="start" name="trip-start"
                                class="form-control mb-2 "
                            ></input>
                            <label for="description" class="form-label formStyle m-0">Description*</label>
                            <textarea required class="form-control mb-2 textArea "
                                id="exampleFormControlTextarea1"
                                rows={expand ? "4" : "1"}
                                style={{ resize: "none" }}
                                placeholder="Enter reimbursement details"
                                onClick={handleExpand}
                                onChange={updateRDescription}
                                value={RDescription}
                            ></textarea>
                            {/* <div class="m-0 mb-2 p-0 ">
                                <label for="formFileMultiple" class="form-label formStyle m-0 p-0">Upload documents</label>
                                <input class="form-control p-0 m-0" type="file" id="formFileMultiple" multiple />
                            </div> */}
                            <button type="submit" class="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}>SUBMIT</span></button>

                        </div>

                    </div>
                </form>
                <div className="pt-4" >
                    <em>    <strong style={{ textDecoration: "underline" }}>Note:</strong> All the original copies of the documents should be submitted to the Office of Student Affairs.</em>


                </div>
            </div>
        </>
    )
}

export default HomeContent;