import React from 'react'
import { Col, Container, Row, Button, Table } from 'reactstrap';
import { reimbursements } from './reimbursements'

function Results() {
    return (
        <Table hover responsive className="rounded-lg p-0 m-0">
            <thead className="mt-0 p-0">
                <th className="text-color-main h6">#</th>
                <th className="text-color-main h6">Title</th>
                <th className="text-color-main h6">Description</th>
                <th className="text-color-main h6">Added By</th>
                <th className="text-color-main h6">Date</th>
                <th className="text-color-main h6">Proof</th>
                <th className="text-color-main h6">Approve</th>
                <th className="text-color-main h6">Reject</th>
            </thead>
            <tbody className="pt-0 mt-0">
                {
                    reimbursements.map((reimbursement) => {
                        return (
                            <tr>
                            <th scope="row">{reimbursement.id}</th>
                            <td>{reimbursement.title}</td>
                            <td>{reimbursement.description}</td>
                            <td>{reimbursement.addedBy}</td>
                            <td>{reimbursement.date}</td>
                            <td><Button color="warning" >View</Button></td>
                            <td><Button color="success" >Approve</Button></td>
                            <td><Button color="danger" >Reject</Button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

function AdminTable() {
    return (
        <Container className="p-3 p-md-4 mb-4 bg-color-lightest-grey rounded-lg">
            <Row>
                <Results />
            </Row>
        </Container>
    )
}

export default AdminTable;