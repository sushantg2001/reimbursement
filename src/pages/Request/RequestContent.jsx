import React, {useState} from "react"

function RequestContent()
{
    const [expand, setExpand] = useState(false);
    const[isClub, setClub] = useState(false);

    function handleExpand()
    {
        setExpand(true);
    }
    const options= [
        {
            option:"Student",
            isAvailable: true
        },
        {
            option:"Club",
            isAvailable:false
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
        <div className="container  homeContainer ">
            <h4 className="pt-4">
                Submit New Access Request
            </h4>
            <p className="homePageContent pt-1 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>
            <form> 
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                    <label for="Name" className="formStyle m-0">Name*</label>
                    <input required type="text" class="form-control mb-2" />
                    <label for="purpose" className="formStyle m-0">Purpose*</label>
                    <select required id="purpose" name="purpose" className="form-control mb-2" onChange={updateClub}>
                        {
                            options.map((option, index)=>{
                                return(<option value={index.option} key={index} >{option.option}</option>)
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
                                        return (<option value={club.club} key={index}>{club.club}</option>);
                                    })
                                }
                            </select>
                            </>)
                    }
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <label for="description" class="form-label formStyle m-0">Description*</label>
                        <textarea required class="form-control mb-2" id="exampleFormControlTextarea1"                         
                        rows={expand? "4": "1" }
                        style={{resize:"none"}}
                        placeholder="Enter access request details"
                        onClick={handleExpand}></textarea>
                        <button type="submit" class="btn reimbBtn pull-right btn-lg p-0 pt-1 pb-1 pl-4 pr-4"  style={{backgroundColor:"#3FADA8", borderRadius:"30px"}}><span className="fw-700 white" style={{fontSize:"80%"}}>SUBMIT</span></button>
                    </div>
                </div>
                </form>

        </div>
        </>
)
}

export default RequestContent;