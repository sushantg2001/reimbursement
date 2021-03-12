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
    else if(temp.status === "Approved")
    {
        colorStyle.color = "#34A853"

    }
    else{
        colorStyle.color = "#F0AD4E";
    }
    return(<>
            <div className="col-md-4 col-sm-6 col-12 h-100 mb-3">
            <div className="card border-secondary">
                <div className="card-body">
                    <h5 className="card-title blue-color">{props.purpose}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><span className="historyAmount">{"₹ "+props.amount}</span> <span className="historyStatus" style={colorStyle}>{props.status}</span></h6>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    </>);
}
export default Card;