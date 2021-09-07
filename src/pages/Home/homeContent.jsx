import React, {useState, useEffect} from "react"
import axios from "axios"


function HomeContent()
{
    const [entity, setentity] = useState([]);
    useEffect(async()=>{
        let entityData=await axios.get('/entityapi/', {
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
        setentity(entityData)
        },[])
        const clubs = [
            {
                index: 1,
                name: "Enactus",
                budget: 1500,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
                image:"https://lh3.googleusercontent.com/proxy/R0z3ZSI0R0HnbE83XIftfzBZHDF3Yr2B7IXla9kX0mpJdXfGKETb_ITUYzyjvojjkp60D7PcpewmL_0gPU4A0m4t1uWk6MNkL9jKuFISoEORdv53-Nd6c6gx"
            },
            {
                index: 2,
                name: "IEEE",
                budget: 21500,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
                image:"https://1000logos.net/wp-content/uploads/2019/03/IEEE-Logo.jpg"
        
            },
            {
                index: 3,
                name: "Developer Student Club",
                budget: 1500,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
                image:"data:image/png;base64,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"
        
            },
            {
                index: 4,
                name: "Byld",
                budget: 1500,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.",
                image:"https://media.licdn.com/dms/image/C510BAQEnEnSO15eV8A/company-logo_200_200/0?e=2159024400&v=beta&t=KjnKw38-CQABiEeg02oNZqihXFdbE3Mcc2-HSsRSvp4"
        
            },
        
        ] 
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
                                    (clubs).map((club, index)=>{
                                        return (<option value={club.name} key={index}  >{club.name}</option>);
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
                    <em>    <strong style={{textDecoration:"underline"}}>Note:</strong> All the original copies of the documents should be submitted to the Office of entity Affairs.</em>


                </div>
        </div>
        </>
)
}

export default HomeContent;