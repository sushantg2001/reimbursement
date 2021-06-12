import React, {useState, useEffect} from "react"
import axios from "axios"
import AdminTable from "./AdminTable"

function AdminHomeContent()
{
    const [student, setStudent] = useState([]);
    useEffect(async()=>{
        let studentData=await axios.get('/studentapi/', {
                        headers: {
                            'Authorization':`Token ${localStorage.getItem('token')}`
                        }
                        })
                        .then(res=>{
                            console.log(res.data);
                            return res.data;
                        })
                        .catch(err=>{
                            console.log(err);
                        })
        setStudent(studentData)
        },[])
    
    const [isChecked, setCheck] = useState(true);
    function removeCheck()
    {
        setCheck(false);
    }
    function updateCheck()
    {
        setCheck(true);
    }
    const [search, setSearch] = useState("");
    const [filteredReimbursements, setFilteredReimbursements] = useState([]);
  /*  useEffect(() => {

        if(document.getElementById("minAmountRadio").checked)
        {   
            setFilteredReimbursements(
                recordsFinal.filter((record) =>
                record.amount >= search
                )
            );
        }
        else if(document.getElementById("maxAmountRadio").checked)
        {   
            setFilteredReimbursements(
                recordsFinal.filter((record) =>
                record.amount <= search
                )
            );
        }
        else if(document.getElementById("statusRadio").checked)
        {   
            setFilteredReimbursements(
                recordsFinal.filter((record) =>
                record.status.toLowerCase().includes(search.toLowerCase()) 
                )
            );
        }
        else if(document.getElementById("idRadio").checked)
        {   
            setFilteredReimbursements(
                recordsFinal.filter((record) =>
                record.id.toLowerCase().includes(search.toLowerCase()) 
                )
            );
        }

      }, [search, recordsFinal]); */

    return (   
        <>
        <div className="container  homeContainer mb-3 pb-0   ">
            <h4 className="pt-4">
                Approve Reimbursements
            </h4>
            <p className="homePageContent pt-1 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>
            <div class="input-group  flex-nowrap mb-2 mt-0">
                <span class="input-group-text" id="addon-wrapping" style={{borderRadius:"0px", color:"#fff", backgroundColor:"#3FADA8"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> 
{/* <p className="p-0 m-0 blue-color">.</p>{"Search"}  */}
</span>
                <input className="form-control"
                type="text"
                placeholder="Filter Reimbursements"
                onChange={(e) => setSearch(e.target.value)}
                aria-describedby="addon-wrapping"
                style={{borderRadius:"0px"}}
                />

            </div>
            <p className="pb-0 mb-0" style={{textDecoration:"underline"}}>Search by the filters:</p>
            <div className="pt-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="minAmountRadio" value="option1" checked={isChecked} onClick={updateCheck}/>
                    <label class="form-check-label pl-1" for="minAmountRadio">Min Amount</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maxAmountRadio" value="option2" onClick={removeCheck}/>
                    <label class="form-check-label pl-1" for="maxAmountRadio">Max Amount</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="statusRadio" value="option3" onClick={removeCheck}/>
                    <label class="form-check-label pl-1" for="statusRadio">Status of Reimbursement</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="idRadio" value="option4" onClick={removeCheck}  />
                    <label class="form-check-label pl-1" for="idRadio">Reimbursement ID</label>
                </div>
            </div>
            
        </div>
        <AdminTable/>
        </>
)
}

export default AdminHomeContent;
