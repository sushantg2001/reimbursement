import React, {useState} from "react"

function HomeContent()
{
    const[expand, setExpand] = useState(false);
    const[isClub, setClub] = useState(false);
    function handleExpand()
    {
        setExpand(true);
    }
    var d = new Date();
    var today = d.getFullYear()+"-"; 
    if((d.getMonth()+1)<10 && d.getDate()<10)
    {
        today = today + "0"+ (d.getMonth()+1)+"-0"+ d.getDate();
    }
    else if((d.getMonth()+1)<10)
    {
        today = today + "0"+ (d.getMonth()+1)+"-"+ d.getDate()
    }
    else if(d.getDate<10)
    {
        today = today + (d.getMonth()+1)+"-0"+ d.getDate();
    }
    else{
        today = today + (d.getMonth()+1)+"-0"+ d.getDate();
    }
    const options= [
        {
            option:"Student",
            isAvailable: true
        },
        {
            option:"Club",
            isAvailable:true
        }
    ]
    const clubs = [
        {
            club:"Club1",
            isAvailable:false
        },
        {
            club:"Club2",
            isAvailable:false
        },
        {
            club:"Club3",
            isAvailable:false
        },
        {
            club:"Club4",
            isAvailable:true
        },
        {
            club:"Club5",
            isAvailable:false
        },
        {
            club:"Club6",
            isAvailable:false
        },
        {
            club:"Club7",
            isAvailable:false
        },
        {
            club:"Club8",
            isAvailable:true
        },
        {
            club:"Club9",
            isAvailable:false
        },
        {
            club:"Club10",
            isAvailable:false
        },
        {
            club:"Club11",
            isAvailable:false
        }
    ]
    function updateClub(event)
    {
        const val = event.target.value;
        console.log(val);
        if(val === "Club")
        {
            setClub(true);
        }
        else{
            setClub(false);
        }
    }
    return (   
        <>
        <div className="container  homeContainer mb-5  ">
            <h4 className="pt-4">
                Submit New Reimbursement
            </h4>
            <p className="homePageContent pt-1 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>
            <form> 
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                    <label for="Name" className="formStyle m-0">Name*</label>
                    <input type="text" class="form-control mb-2 "  required/>
                    <label for="amount" className="formStyle m-0">Amount Required*</label>
                    <input type="number" class="form-control mb-2 "  required />
                    <label for="purpose" className="formStyle m-0">Purpose*</label>
                    <select id="purpose" name="purpose" className="form-control mb-2 " required onChange={updateClub}>
                        {
                            options.map((option, index)=>{
                                return (<option value={option.option} key={index} disabled={!option.isAvailable} >{option.option}</option>);
                            })
                        }
                    </select>
                    {
                        isClub && 
                            (<>
                            <label for="clubs" className="formStyle m-0">Select Club*</label>
                            <select id="club" name="club" className="form-control mb-2 " required >
                                {
                                    clubs.map((club, index)=>{
                                        return (<option value={club.club} key={index} disabled={!club.isAvailable} >{club.club}</option>);
                                    })
                                }
                            </select>
                            </>)
                    }
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <label for="start" className="formStyle m-0">Date of event*</label>
                        <input type="date" id="start" name="trip-start"
                        class="form-control mb-2 "
                            value={today}></input>
                        <label for="description" class="form-label formStyle m-0">Description*</label>
                        <textarea required class="form-control mb-2 textArea " 
                        id="exampleFormControlTextarea1" 
                        rows={expand? "4": "1" }
                        style={{resize:"none"}}
                        placeholder="Enter reimbursement details"
                        onClick={handleExpand}
                        ></textarea>
                        <div class="m-0 mb-2 p-0 ">
                            <label for="formFileMultiple" class="form-label formStyle m-0 p-0">Upload documents</label>
                            <input class="form-control p-0 m-0" type="file" id="formFileMultiple" multiple />
                        </div>
                        <button type="submit" class="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4"  style={{backgroundColor:"#3FADA8", borderRadius:"30px"}}><span className="fw-700 white" style={{fontSize:"80%"}}>SUBMIT</span></button>

                    </div>

                </div>
                </form>
                <div className="pt-4" >
                    <em>    <strong style={{textDecoration:"underline"}}>Note:</strong> All the original copies of the documents should be submitted to the Office of Student Affairs.</em> 


                </div>
        </div>
        </>
)
}

export default HomeContent;