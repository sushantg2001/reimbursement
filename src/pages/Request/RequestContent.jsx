import React from "react"

function RequestContent()
{
    return (   
        <>
        <div className="container  homeContainer mb-5">
            <p className="homePageContent pt-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>
            <form> 
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                    <label for="Name" className="formStyle m-0">Name*</label>
                    <input required type="text" class="form-control mb-2" />
                    <label for="purpose" className="formStyle m-0">Purpose*</label>
                    <select required id="purpose" name="purpose" className="form-control mb-2">
                        <option value="opt1">Option 1</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                        <option value="opt4">Option 4</option>
                    </select>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <label for="description" class="form-label formStyle m-0">Description*</label>
                        <textarea required class="form-control mb-2" id="exampleFormControlTextarea1" rows="4"></textarea>
                        <button type="submit" class="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4"  style={{backgroundColor:"#3FADA8", borderRadius:"30px"}}><span className="fw-700 white" style={{fontSize:"80%"}}>SUBMIT</span></button>
                    </div>
                </div>
                </form>

        </div>
        </>
)
}

export default RequestContent;