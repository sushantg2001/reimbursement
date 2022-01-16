import React from "react";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import RequestContent from "./RequestContent"

function Request()
{
    return (<>
        <div className="wrapper">
            <Navbar />
            <RequestContent />
        </div>

        <Footer />
    </>);
}
export default Request;