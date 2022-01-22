import React, { useState, useRef } from "react"
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactToPrint from "react-to-print";

/* This file contains the Card for past reimbursements along with modal and printing reimbursement. */

function Card(props) {
    let componentRef = useRef();

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const colorStyle = {
        color: ""
    };
    const temp = props;
    if (temp.status === "Rejected") {
        colorStyle.color = "#EA4335";
    }
    else if (temp.status === "Approved") {
        colorStyle.color = "#34A853"
    }
    else {
        colorStyle.color = "#F0AD4E";
    }
    class ComponentToPrint extends React.Component {
        render() {
            return (
                <div>
                    <ModalHeader toggle={toggle}><h3 className="pt-0 pb-0 mb-0 blue-color ">{props.purpose}</h3></ModalHeader>
                    <ModalBody>
                        <p><span className="fw-700">{"[ID#" + props.id + "] "}</span>{props.description}</p>
                        <h5 >Details</h5>
                        <table className="table table-striped ">
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Status</td>
                                    <td>{props.status}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Amount</td>
                                    <td>{"₹ " + props.amount}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Submitted on</td>
                                    <td>{props.date}</td>
                                </tr>
                                {props.processed &&
                                    <><tr> <th scope="row">4</th>
                                        <td>Processed on</td>
                                        <td>{props.processed}</td>
                                    </tr>
                                    </>}

                            </tbody>
                        </table>
                    </ModalBody>
                </div>);
        }
    }
    return (<>
        <div className="col-12 h-100 m-0">
            <div className="card " style={{ borderRadius: "0px" }}>
                <div className="card-body m-0">
                    <p className="card-title blue-color m-0 p-0"><span className="fw-700 mr-1" style={{ fontSize: "110%", textDecoration: "underline" }}>[{props.purpose}] {props.name}</span><span style={{ color: "#000", fontSize: "80%", fontWeight: "600" }}>{"[ID#" + props.id + "]"}</span>
                        <a className="ml-1" onClick={toggle} ><img src="https://img.icons8.com/material-outlined/18/000000/external-link.png" /></a>
                        <span className="historyStatus fw-700" style={colorStyle}>{props.status}</span></p>
                    <p className="card-text m-0 p-0"> <span className="historyAmount fw-700">{"₹ " + props.amount}</span> {(props.description).slice(0, 100) + "..."} </p>
                </div>
                <div>
                    <Modal isOpen={modal} toggle={toggle} >
                            <ComponentToPrint ref={(el) => (componentRef = el)} />
                            <ModalFooter>

                            <ReactToPrint
                                trigger={() => <button className="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#49F043", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}>PRINT</span></button>}
                                content={() => componentRef}
                            />
                            <button type="submit" onClick={toggle} className="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#3FADA8", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}>CLOSE</span></button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>

    </>);
}
export default Card;