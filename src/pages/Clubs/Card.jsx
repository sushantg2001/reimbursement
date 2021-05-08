import React from "react"

function Card(props)
{
    return(<>
            <div className="col-12 h-100 m-0">
            <div className="card " style={{borderRadius:"0px"}}>
                <div className="card-body m-0">
                    <p className="card-title blue-color m-0 p-0"><span><img src="https://picsum.photos/200" width="30px" height="30px" style={{borderRadius:"15px"}} className="mr-2"></img></span>
                    <span className="fw-700 mr-1" style={{fontSize:"110%", textDecoration:"underline"}}>{props.name}</span>
                    </p>
                    <p className="card-text m-0 p-0"> <span className="historyAmount fw-700">{"₹ "+props.amount}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur ipsum turpis, et molestie ipsum cursus id.

</p>
                </div>

            </div>
        </div>
    </>);
}
export default Card;