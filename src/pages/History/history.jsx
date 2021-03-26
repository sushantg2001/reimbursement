import React from "react";
import Navbar from "../../components/Navbar"
import HistoryContent from "./historyContent";
import Footer from "../../components/Footer"


function History()
{
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <HistoryContent />
            </div>
            <Footer />
        </>
    );
}
export default History;