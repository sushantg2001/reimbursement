import React, { useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
/* This file contains the Card for past reimbursements along with modal and printing reimbursement. */

function Option(props) {

      let styleObject = {
            borderRadius: '20px',
            background: '#343a40',
            color: '#fff',
            fontSize: 'medium'
      }
      const [modal, setModal] = useState(false);
      const [modal2, setModal2] = useState(false);
      const [newOption, setNewOption] = useState("");
      const toggle = () => setModal(!modal);
      const toggle2 = () => setModal2(!modal2);
      function updateNewOption(event) {
            setNewOption(event.target.value);
      }

      function handleDeleteOption(event) {
            event.preventDefault();
            let deleteUrl = '/type_api/' + props.data + '/'
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
                        toast('Option Deleted Successfully!',
                              {
                                    icon: '✔️',
                                    style: styleObject,
                              }
                        )
                  })
                  .catch(function (error) {
                        console.log(error);
                        toast('Error Deleting Option!',
                              {
                                    icon: '⚠️',
                                    style: styleObject,
                              }
                        );

                  })
                  .then(()=>window.location.reload())

      }
 


      return (<>
            <Toaster position="top-right"
                  reverseOrder={true} />


            {
                  (props.data === "Personal" || props.data === "Club") ?
                        (<li> {props.data} </li>) :
                        (<li>{props.data}
                              <a>
                                    <img src="https://img.icons8.com/ios-glyphs/20/555555/filled-trash.png" alt="delete" onClick={toggle2} />
                              </a>



                              <div>
                                    <Modal isOpen={modal2} toggle={toggle2} >
                                          <div>
                                                <ModalHeader toggle={toggle2}><h3 className="pt-0 pb-0 mb-0 blue-color">Delete Option: {props.data}</h3></ModalHeader>
                                                <ModalBody>
                                                      <p className="pb-0 mb-0" style={{ fontWeight: "bolder" }}> Are you sure you want to delete the option?</p>
                                                      <div class="input-group  flex-nowrap mb-4  w-75">

                                                            <form onSubmit={handleDeleteOption} >

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

                        </li>)

            }

      </>);
}
export default Option;