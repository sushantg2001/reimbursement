import React, { useMemo, useEffect, useState } from "react";
import axios from "axios"
import TableContainer from "./TableContainer"
import {
      Container,
      Card,
      CardBody,
      CardTitle,
} from 'reactstrap';
import { SelectColumnFilter } from './filters';
import toast, { Toaster } from 'react-hot-toast';

function Table() {
      function approveRequest(row) {
            let reimbursementId = row.original.id;
            let patchUrl = '/reimbursement_api/' + reimbursementId + '/'

            let headersList = {
                  "Accept": "*/*",
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  "Content-Type": "application/json"
            }

            let reqOptions = {
                  url: patchUrl,
                  method: "PATCH",
                  headers: headersList,
                  data: "{\n \"status\":\"Approved\"\n}",
            }

            axios.request(reqOptions)
                  .then(function (response) {
                        console.log(response.data);
                        toast('Reimbursement Approved Successfully!',
                              {
                                    icon: '✔️',
                                    style: {
                                          borderRadius: '20px',
                                          background: '#343a40',
                                          color: '#fff',
                                          fontSize: 'medium'
                                    },
                              }
                        );
                  })
                  .catch(function (error) {
                        console.log(error);
                        toast('Error Accepting Reimbursement!',
                              {
                                    icon: '⚠️',
                                    style: {
                                          borderRadius: '20px',
                                          background: '#343a40',
                                          color: '#fff',
                                          fontSize: 'medium'
                                    },
                              }
                        );
                  })

      }
      function rejectRequest(row) {
            console.log(row)
            let reimbursementId = row.original.id;
            let patchUrl = '/reimbursement_api/' + reimbursementId + '/'

            let headersList = {
                  "Accept": "*/*",
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  "Content-Type": "application/json"
            }

            let reqOptions = {
                  url: patchUrl,
                  method: "PATCH",
                  headers: headersList,
                  data: "{\n \"status\":\"Rejected\"\n}",
            }

            axios.request(reqOptions)
                  .then(function (response) {
                        console.log(response.data);
                        toast('Reimbursement Rejected Successfully!',
                              {
                                    icon: '✔️',
                                    style: {
                                          borderRadius: '20px',
                                          background: '#333',
                                          color: '#fff',
                                          fontSize: 'medium'
                                    },
                              }
                        );
                  })
                  .catch(function (error) {
                        console.log(error);
                        toast('Error Rejecting Reimbursement!',
                              {
                                    icon: '⚠️',
                                    style: {
                                          borderRadius: '20px',
                                          background: '#343a40',
                                          color: '#fff',
                                          fontSize: 'medium'
                                    },
                              }
                        );
                  })



      }
      const [data, setData] = useState([]);
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
                  setData(recordsData)
                  console.log(recordsData)
                  // ...
            }
            fetchData();
      }, []); // Or [] if effect doesn't need props or state


      const columns = useMemo(
            () => [
                  {
                        Header: () => null,
                        id: 'expander', // 'id' is required
                        Cell: ({ row }) => (
                              <span {...row.getToggleRowExpandedProps()}>
                                    {row.isExpanded ? <img src="https://img.icons8.com/fluency-systems-filled/32/000000/fold-arrows.png" /> : <img src="https://img.icons8.com/material-outlined/32/000000/expand-arrow.png" />}
                              </span>
                        )
                  },
                  {
                        Header: "ID",
                        accessor: "id",
                  },
                  {
                        Header: "Purpose",
                        accessor: "purpose",
                  },
                  {
                        Header: "Amount",
                        accessor: "amount",

                  },
                  {
                        Header: "Status",
                        accessor: "status",
                        Filter: SelectColumnFilter,
                        filter: 'equals'
                  },
                  {
                        Header: "Added By",
                        accessor: "username",


                  },
                  {
                        Header: () => null,
                        id: 'approve', // 'id' is required
                        Cell: ({ row }) => (
                              (row.status === 'Approved') ? <></> :
                                    <button onClick={() => approveRequest(row)} className="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#4CAF50", borderRadius: "30px" }} ><span className="fw-700 white" style={{ fontSize: "80%" }}>APPROVE</span>
                                          <Toaster position="top-right"
                                                reverseOrder={true} />
                                    </button>
                        )
                  },
                  {
                        Header: () => null,
                        id: 'reject', // 'id' is required
                        Cell: ({ row }) => (
                              (row.status === 'Rejected') ? <></> :
                                    <button onClick={() => rejectRequest(row)} className="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#d9534f", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}>REJECT</span>
                                          <Toaster position="top-right"
                                                reverseOrder={true} /></button>

                        )
                  },
            ],
            []
      )
      const renderRowSubComponent = (row) => {
            const {
                  purpose,
                  amount,
                  description,
                  status,
                  id,
                  date,
                  processed,
                  username,
            } = row.original;
            return (
                  <>
                        <Card className="bg-light text-white w-75 mt-2 mb-2" style={{ textAlign: "center", margin: "auto" }}>
                              <CardBody>
                                    <CardTitle><h4 className="pt-0 pb-0 mb-0 blue-color ">{purpose}</h4></CardTitle>

                                    <p style={{ color: "#000" }} ><span className="fw-700" >{"[ID#" + id + "] "}</span>{description}</p>
                                    <h5 style={{ color: "#3FADA8" }} className="pull-left" >Details</h5>
                                    <table className="table table-striped" >
                                          <tbody>
                                                <tr>
                                                      <th scope="row">1</th>
                                                      <td>Status</td>
                                                      <td>{status}</td>
                                                </tr>
                                                <tr>
                                                      <th scope="row">2</th>
                                                      <td>Amount</td>
                                                      <td>{"₹ " + amount}</td>
                                                </tr>
                                                <tr>
                                                      <th scope="row">3</th>
                                                      <td>Submitted on</td>
                                                      <td>{date}</td>
                                                </tr>
                                                <tr>
                                                      <th scope="row">4</th>
                                                      <td>Added By</td>
                                                      <td>{username}</td>
                                                </tr>
                                                {processed &&
                                                      <><tr> <th scope="row">5</th>
                                                            <td>Processed on</td>
                                                            <td>{processed}</td>
                                                      </tr>
                                                      </>}

                                          </tbody>
                                    </table>
                              </CardBody>
                        </Card>
                  </>
            );
      };

      return <Container style={{ marginTop: 20, marginBottom: 50 }}>



            <TableContainer
                  columns={columns}
                  data={data}
                  renderRowSubComponent={renderRowSubComponent}
            />      </Container>

}
export default Table;