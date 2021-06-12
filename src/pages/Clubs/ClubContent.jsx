import React, { useState, useEffect, Component } from "react"
import Card from "./Card"
import axios from "axios";

function ClubContent()
{
    const [clubs, setClubs]= useState([]);
    useEffect(async()=>{
      let clubsData=await axios.get('/clubapi/', {
                    headers: {
                        'Authorization':`Token ${localStorage.getItem('token')}`
                    }
                    })
                      .then(res=>{
                        return res.data;
                      })
                      .catch(err=>{
                        console.log(err);
                      })
      setClubs(clubsData)
      // console.log(clubsData)
    },[])
    
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
