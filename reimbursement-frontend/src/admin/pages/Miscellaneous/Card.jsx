import React, { useState } from "react"
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
/* This file contains the Card for past reimbursements along with modal and printing reimbursement. */

function Card(props) {


    let styleObject = {
        borderRadius: '20px',
        background: '#343a40',
        color: '#fff',
        fontSize: 'medium'
    }
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const [newBudget, setNewBudget] = useState();
    const [newDescription, setNewDescription] = useState("");
    const [newName, setNewName] = useState("");
    function updateNewBudget(event) {
        setNewBudget(event.target.value);
    }
    function updateNewDescription(event) {
        setNewDescription(event.target.value);
    }
    function updateNewName(event) {
        setNewName(event.target.value);
    }
    function handleUpdateName(event) {
        event.preventDefault();
        let updateId = props.id;
        let patchUrl = '/club_api/' + updateId + '/'
        console.log(patchUrl)
        let newData = "{\n    \"name\": \"" + newName + "\"\n}"

        let headersList = {
            "Accept": "*/*",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: patchUrl,
            method: "PATCH",
            headers: headersList,
            data: newData
        }

        axios.request(reqOptions)
            .then(function (response) {
                console.log(response.data);
                toast('Name Updated Successfully!',
                    {
                        icon: '✔️',
                        style: styleObject,
                    }
                )
            })
            .catch(function (error) {
                console.log(error);
                toast('Error Updating Name!',
                    {
                        icon: '⚠️',
                        style: styleObject,
                    }
                );
            })
            .then(() => setNewName(""))

    }

    function handleUpdateBudget(event) {
        event.preventDefault();
        let updateId = props.id;
        let patchUrl = '/club_api/' + updateId + '/'
        console.log(patchUrl)
        let newData = "{\n    \"budget\": " + newBudget + "\n}"
        console.log(newData)
        let headersList = {
            "Accept": "*/*",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: patchUrl,
            method: "PATCH",
            headers: headersList,
            data: newData
        }

        axios.request(reqOptions)
            .then(function (response) {
                console.log(response.data);
                toast('Budget Updated Successfully!',
                    {
                        icon: '✔️',
                        style: styleObject,
                    }
                )
            })
            .catch(function (error) {
                console.log(error);
                toast('Error Updating Budget!',
                    {
                        icon: '⚠️',
                        style: styleObject,
                    }
                );
            })
            .then(() => setNewBudget(""))

    }

    function handleUpdateDescription(event) {
        event.preventDefault();
        let updateId = props.id;
        let patchUrl = '/club_api/' + updateId + '/'
        let newData = "{\n    \"description\": \"" + newDescription + "\"\n}"

        let headersList = {
            "Accept": "*/*",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: patchUrl,
            method: "PATCH",
            headers: headersList,
            data: newData
        }

        axios.request(reqOptions)
            .then(function (response) {
                console.log(response.data);
                toast('Description Updated Successfully!',
                    {
                        icon: '✔️',
                        style: styleObject,
                    }
                )
            })
            .catch(function (error) {
                console.log(error);
                toast('Error Updating Description!',
                    {
                        icon: '⚠️',
                        style: styleObject,
                    }
                );
            })
            .then(() => setNewDescription(""))

    }

    function handleDeleteClub(event)
    {
        event.preventDefault();
        let deleteId = props.id;
        let deleteUrl = '/club_api/' + deleteId + '/'
        let headersList = {
            "Accept": "*/*",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    
        let reqOptions = {
            url: deleteUrl,
            method: "DELETE",
            headers: headersList,
        }
    
        axios.request(reqOptions)
            .then(function (response) {
                console.log(response.data);
                toast('Club Deleted Successfully!',
                    {
                        icon: '✔️',
                        style: styleObject,
                    }
                )
            })
            .catch(function (error) {
                console.log(error);
                toast('Error Deleting Club!',
                    {
                        icon: '⚠️',
                        style: styleObject,
                    }
                );
            }).then(()=>window.location.reload())



    }


    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);



    return (<>
        <Toaster position="top-right"
            reverseOrder={true} />
        <div className="col-12 h-100 m-0">
            <div className="card " style={{ borderRadius: "0px" }}>
                <div className="card-body m-0">
                    <p className="card-title blue-color m-0 p-0"><span className="fw-700 mr-1" style={{ fontSize: "110%", textDecoration: "underline" }}>{props.name}</span>
                        <a className="ml-1" onClick={toggle} >
                            <img src="https://img.icons8.com/material-rounded/16/000000/edit--v1.png" alt="edit" />
                        </a>
                        <a className="pull-right" onClick={toggle2}>
                            <img src="https://img.icons8.com/ios-glyphs/20/555555/filled-trash.png" alt="delete" />
                        </a>
                    </p>
                    <p className="card-text m-0 p-0"> <span className="historyAmount fw-700">{"₹ " + props.budget}</span> {(props.description).slice(0, 100) + "..."} </p>
                </div>
                <div>
                    <Modal isOpen={modal} toggle={toggle} >
                        <div>
                            <ModalHeader toggle={toggle}><h3 className="pt-0 pb-0 mb-0 blue-color">{props.name}</h3></ModalHeader>
                            <ModalBody>
                                <p><span className="fw-700">{"[Budget# ₹" + props.budget + "] "}</span>{props.description}</p>

                                <div class="input-group  flex-nowrap mb-4 mt-1 w-75">

                                    <form onSubmit={handleUpdateName}>
                                        <input className="form-control"
                                            type="text"
                                            placeholder="Set New Name"
                                            aria-describedby="addon-wrapping"
                                            style={{ borderRadius: "0px" }}
                                            value={newName}
                                            onChange={updateNewName}
                                            required
                                        />

                                        <button type="submit" class="btn reimbBtn  p-0 pt-1 pb-1 pl-4 pr-4 mt-2" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}>
                                            <span className="fw-700 white" style={{ fontSize: "80%" }}>   <img src="https://img.icons8.com/fluency-systems-filled/24/ffffff/approve-and-update.png" alt="" /> UPDATE NAME</span>
                                        </button>


                                    </form>

                                </div>
                                <div class="input-group  flex-nowrap mb-4 mt-1 w-75">

                                    <form onSubmit={handleUpdateBudget}>
                                        <input className="form-control"
                                            type="number"
                                            placeholder="Set New Budget"
                                            aria-describedby="addon-wrapping"
                                            style={{ borderRadius: "0px" }}
                                            value={newBudget}
                                            onChange={updateNewBudget}
                                            required
                                        />
                                        <button type="submit" class="btn reimbBtn  p-0 pt-1 pb-1 pl-4 pr-4 mt-2" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}>

                                            <span className="fw-700 white" style={{ fontSize: "80%" }}>   <img src="https://img.icons8.com/fluency-systems-filled/24/ffffff/approve-and-update.png" alt="" /> UPDATE BUDGET</span>
                                        </button>
                                    </form>



                                </div>
                                <div class="input-group  flex-nowrap mb-2 mt-1 w-75">
                                    <form onSubmit={handleUpdateDescription}>

                                        <input className="form-control"
                                            type="text"
                                            placeholder="Set New Description"
                                            aria-describedby="addon-wrapping"
                                            style={{ borderRadius: "0px" }}
                                            value={newDescription}
                                            onChange={updateNewDescription}
                                            required
                                        />

                                        <button type="submit" class="btn reimbBtn  p-0 pt-1 pb-1 pl-4 pr-4 mt-2" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}>

                                            <span className="fw-700 white" style={{ fontSize: "80%" }}>  
                                             <img src="https://img.icons8.com/fluency-systems-filled/24/ffffff/approve-and-update.png" alt="" /> 
                                             UPDATE DESCRIPTION</span>
                                        </button>
                                    </form>



                                </div>
                            </ModalBody>
                        </div>
                        <ModalFooter>

                            <button type="submit" onClick={toggle} class="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }} onClick={() => { window.location.reload() }}><span className="fw-700 white" style={{ fontSize: "80%" }}>CLOSE</span></button>
                        </ModalFooter>
                    </Modal>
                </div>


                <div>
                    <Modal isOpen={modal2} toggle={toggle2} >
                        <div>
                            <ModalHeader toggle={toggle2}><h3 className="pt-0 pb-0 mb-0 blue-color">{props.name}</h3></ModalHeader>
                            <ModalBody>
                                <p><span className="fw-700">{"[Budget# ₹" + props.budget + "] "}</span>{props.description}</p>
                                <p className="pb-0 mb-0" style={{fontWeight:"bolder"}}> Are you sure you want to delete the club?</p>
                                <div class="input-group  flex-nowrap mb-4  w-75">
                                 
                                    <form onSubmit={handleDeleteClub}>
                            
                                        <button type="submit" class="btn reimbBtn  p-0 pt-1 pb-1 pl-4 pr-4 mt-2" style={{ backgroundColor: "#d9534f", borderRadius: "30px" }}>
                                            <span className="fw-700 white" style={{ fontSize: "80%" }}>   
                                            <img src="https://img.icons8.com/ios-glyphs/20/ffffff/filled-trash.png" alt="delete" />
                                             YES, DELETE</span>
                                        </button>
                                    </form>

                                </div>
                            </ModalBody>
                        </div>
                        <ModalFooter>

                            <button type="submit" onClick={toggle2} class="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }} onSubmit={() => { window.location.reload() }}><span className="fw-700 white" style={{ fontSize: "80%" }}>CLOSE</span></button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>

    </>);
}
export default Card;