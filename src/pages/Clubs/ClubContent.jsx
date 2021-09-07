import React, { useState, useEffect, Component } from "react"
import Card from "./Card"
import axios from "axios";

function ClubContent()
{
    // const [clubs, setClubs]= useState([]);
    // useEffect(async()=>{
    //   let clubsData=await axios.get('/clubapi/', {
    //                 headers: {
    //                     'Authorization':`Token ${localStorage.getItem('token')}`
    //                 }
    //                 })
    //                   .then(res=>{
    //                     return res.data;
    //                   })
    //                   .catch(err=>{
    //                     console.log(err);
    //                   })
    //   setClubs(clubsData)
    //   // console.log(clubsData)
    // },[])
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
    
    const [search, setSearch] = useState("");
    const [filteredClubs, setFilteredClubs] = useState([]);
    useEffect(() => {
        setFilteredClubs(
            clubs.filter((club) =>
            club.name.toLowerCase().includes(search.toLowerCase()) 
            )
        );

      }, [search, clubs]);

    return (   
        <>
        <div className="container pb-4 mb-5 ">
            <p className="homePageContent pt-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id. Mauris a imperdiet elit. Cras bibendum nibh dolor, in interdum sem tempor vitae. 
            </p>

            <div class="input-group  flex-nowrap mb-2 mt-0 ">
            <span class="input-group-text" id="addon-wrapping" style={{borderRadius:"0px", color:"#fff", backgroundColor:"#3FADA8"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
 {/* <p className="p-0 m-0 blue-color">.</p>{"Search"} */}
  </span>
                <input className="form-control"
                type="text"
                placeholder="Search by Club Name"
                onChange={(e) => setSearch(e.target.value)}
                aria-describedby="addon-wrapping"
                style={{borderRadius:"0px"}}
                />

            </div>

            <div className="row mt-4">
                {
                filteredClubs.map(club=>{
                    return(   
                        <Card 
                        key={club.id}
                        description={club.description} 
                        name={club.name}
                        amount={club.budget} 
                        image={club.image}
                        id={club.id}/>
                    );
                })
                }
            </div>
        
        </div>
        </>
)
}

export default ClubContent;
