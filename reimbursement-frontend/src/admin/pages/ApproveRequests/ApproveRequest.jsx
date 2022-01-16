import React from "react";
import NavbarAdmin from "../../components/NavbarAdmin"
import Footer from "../../components/Footer"
import ApproveRequestContent from "./ApproveRequestContent"

function ApproveRequest() {
    return (
        <>
            <div className="wrapper">
                <NavbarAdmin />
                <ApproveRequestContent />
            </div>
            <Footer />
        </>
    );
}
export default ApproveRequest;