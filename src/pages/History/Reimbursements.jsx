import React from "react";
import Navbar from "../../components/Navbar"
import {FullHistoryContent} from "./historyContent";
import Footer from "../../components/Footer"

function Reimbursements()
{
    return(
        <>
            <Navbar />
            <FullHistoryContent />
            <Footer />
        </>
    );
}
export default Reimbursements;