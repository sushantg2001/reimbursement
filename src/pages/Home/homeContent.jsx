import React from "react"

function HomeContent()
{
    return (   
        <>
        <div className="container  homeContainer">
            <p className="homePageContent pt-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>
            <form> 
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                    <label for="Name" className="formStyle m-0">Name*</label>
                    <input type="text" class="form-control mb-2" />
                    <label for="amount" className="formStyle m-0">Amount Required*</label>
                    <input type="number" class="form-control mb-2" />
                    <label for="purpose" className="formStyle m-0">Purpose*</label>
                    <input type="text" class="form-control mb-2" />
                    </div>
                    <div class="col-md-6 col-sm-12">
                    <label for="description" class="form-label formStyle m-0">Description*</label>
                    <textarea class="form-control mb-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="submit" class="btn reimbBtn pull-right btn-lg pl-5 pr-5" style={{backgroundColor:"#3FADA8", borderRadius:"30px"}}><span className="fw-700 white" style={{fontSize:"80%"}}>SUBMIT</span></button>
                    </div>
                </div>
                </form>
        </div>


        </>
)
}

export default HomeContent;