import React, { useMemo, useEffect, useState } from "react";
import TableContainer from "./TableContainer"
import {
      Container,
      Card,
      CardBody,
      CardTitle,
} from 'reactstrap';
import { SelectColumnFilter } from './filters';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

function Table() {
      const [data, setData] = useState([]);
      useEffect(() => {
            async function fetchData() {
                  let headersList = {
                        "Accept": "*/*",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                  }

                  let reqOptions = {
                        url: "/get_requests/",
                        method: "GET",
                        headers: headersList,
                  }

                  axios.request(reqOptions).then(function (response) {
                        let temp = response.data
                        console.log(temp)
                        if (temp.TypeRequest.length >= 0) {
                              for (let i = 0; i < temp.TypeRequest.length; i++) {
                                    let obj = temp.TypeRequest[i];
                                    let tempObj = {
                                          "status": obj.status,
                                          "purpose": obj.purpose,
                                          "id": obj.id,
                                          "date": obj.date,
                                          "added_by": obj.user,
                                          "which_type": "TYPE",
                                          "club": "",
                                          "description": obj.description

                                    }
                                    setData(prevState => {
                                          return [...prevState, tempObj]

                                    })
                              }
                        }
                        if (temp.ClubRequest.length >= 0) {
                              for (let i = 0; i < temp.ClubRequest.length; i++) {
                                    let obj = temp.ClubRequest[i];
                                    let tempObj = {
                                          "status": obj.status,
                                          "purpose": obj.purpose,
                                          "id": obj.id,
                                          "date": obj.date,
                                          "added_by": obj.user,
                                          "which_type": "CLUB",
                                          "club": obj.club,
                                          "description": obj.description

                                    }
                                    setData(prevState => {
                                          return [...prevState, tempObj]

                                    })

                              }
                        }

                  })
                  console.log("Data is", data)
            }
            fetchData();
      }, []); // Or [] if effect doesn't need props or state


      function approveRequest(row) {
            console.log(row.original)
            let headersList = {
                  "Accept": "*/*",
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  "Cont-ent-Type": "application/json"
            }
            let id_ = row.original.id;
            let patchUrl;
            if (row.original.which_type === "TYPE") {
                  patchUrl = '/type_request_api/' + id_ + '/';
            }
            if (row.original.which_type === "CLUB") {
                  patchUrl = "/club_request_api/" + id_ + '/'
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
                        toast('Access Request Approved Successfully!',
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
                        toast('Error Approving Access Request!',
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
            console.log(row.original)
            let headersList = {
                  "Accept": "*/*",
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  "Content-Type": "application/json"
            }
            let id_ = row.original.id;
            let patchUrl;
            if (row.original.which_type === "TYPE") {
                  patchUrl = '/type_request_api/' + id_ + '/';
            }
            if (row.original.which_type === "CLUB") {
                  patchUrl = "/club_request_api/" + id_ + '/'
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
                        toast('Access Request Rejected Successfully!',
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
                        toast('Error Rejecting Access Request!',
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
                        Header: "Purpose",
                        accessor: "purpose",

                  },
                  {
                        Header: "Added By",
                        accessor: "added_by",


                  },
                  {
                        Header: "Status",
                        accessor: "status",
                        Filter: SelectColumnFilter,
                        filter: 'equals'
                  },
                  {
                        Header: () => null,
                        id: 'approve', // 'id' is required
                        Cell: ({ row }) => (
                              (row.original.status === 'Approved') ? <></> :
                                    <button onClick={() => approveRequest(row)} className="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4" style={{ backgroundColor: "#4CAF50", borderRadius: "30px" }}><span className="fw-700 white" style={{ fontSize: "80%" }}>APPROVE</span>
                                          <Toaster position="top-right"
                                                reverseOrder={true} /></button>
                        )
                  },
                  {
                        Header: () => null,
                        id: 'reject', // 'id' is required
                        Cell: ({ row }) => (
                              (row.original.status === 'Rejected') ? <></> :
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
                  id,
                  description,
                  purpose,
                  club,
                  added_by,
                  date
            } = row.original;
            return (
                  <>
                        <Card className="bg-light text-white w-75 mt-2 mb-2" style={{ textAlign: "center", margin: "auto" }}>
                              <CardBody>
                                    <CardTitle><h4 className="pt-0 pb-0 mb-0 blue-color">{purpose}</h4></CardTitle>

                                    <p style={{ color: "#000" }}><span className="fw-700" >{"[ID#" + id + "] "}</span>{description}</p>
                                    <h5 className="pull-left" style={{ color: "#3FADA8" }}>Details</h5>
                                    <table className="table table-striped" >
                                          <tbody>
                                                <tr>
                                                      <th scope="row">1</th>
                                                      <td>Purpose</td>
                                                      <td>{purpose}</td>
                                                </tr>
                                                {club &&
                                                      <><tr> <th scope="row">2</th>
                                                            <td>Club Name</td>
                                                            <td>{club}</td>
                                                      </tr>
                                                      </>}
                                                <tr>
                                                      <th scope="row">3</th>
                                                      <td>Date Submitted</td>
                                                      <td>{date}</td>
                                                </tr>
                                                <tr>
                                                      <th scope="row">4</th>
                                                      <td>Added By</td>
                                                      <td>{added_by}</td>
                                                </tr>

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