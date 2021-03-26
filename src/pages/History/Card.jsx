import React from "react"

function Card(props)
{
    const colorStyle={
        color:""
    };
    const temp = props;
    if(temp.status === "Rejected")
    {
        colorStyle.color = "#EA4335";
    }
    else if(temp.status === "Completed")
    {
        colorStyle.color = "#34A853"

    }
    else{
        colorStyle.color = "#F0AD4E";
    }
    return(<>
            <div className="col-12 h-100 m-0">
            <div className="card " style={{borderRadius:"0px"}}>
                <div className="card-body m-0">
                    <p className="card-title blue-color m-0 p-0"><span className="fw-700" style={{fontSize:"110%", textDecoration:"underline"}}>{props.purpose}</span> <span className="historyStatus fw-700" style={colorStyle}>{props.status}</span></p>
                    <p className="card-text m-0 p-0"> <span className="historyAmount fw-700">{"₹ "+props.amount}</span> {props.description} </p>
                </div>
            </div>
        </div>
    </>);
}
export default Card;