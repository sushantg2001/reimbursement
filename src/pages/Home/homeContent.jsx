import React from "react"

function HomeContent()
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
                    <input type="text" class="form-control mb-2" required/>
                    <label for="amount" className="formStyle m-0">Amount Required*</label>
                    <input type="number" class="form-control mb-2" required />
                    <label for="purpose" className="formStyle m-0">Purpose*</label>
                    <select id="purpose" name="purpose" className="form-control mb-2" required>
                        <option value="opt1" disabled={false}>Option 1</option>
                        <option value="opt2" disabled={true}>Option 2</option>
                        <option value="opt3" disabled={true}>Option 3</option>
                        <option value="opt4" disabled={false}>Option 4</option>
                    </select>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <label for="description" class="form-label formStyle m-0">Description*</label>
                        <textarea required class="form-control mb-2" id="exampleFormControlTextarea1" rows="4"></textarea>
                        <div class="m-0 mb-2 p-0 ">
                            <label for="formFileMultiple" class="form-label formStyle m-0 p-0">Upload cancelled cheque</label>
                            <input class="form-control p-0 m-0" type="file" id="formFileMultiple" multiple />
                        </div>
                        <button type="submit" class="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4"  style={{backgroundColor:"#3FADA8", borderRadius:"30px"}}><span className="fw-700 white" style={{fontSize:"80%"}}>SUBMIT</span></button>

                    </div>

                </div>
                </form>
                <div className="pt-4" >
                    <em>      <strong style={{textDecoration:"underline"}}>Note:</strong> All the original copies of the documents should be submitted to the Office of Student Affairs.</em> 


                </div>
        </div>
        </>
)
}

export default HomeContent;