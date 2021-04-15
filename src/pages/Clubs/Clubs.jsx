import React from "react";
import Navbar from "../../components/Navbar"
import ClubContent from "./ClubContent";
import Footer from "../../components/Footer"


function Clubs()
{
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <ClubContent />
            </div>
            <Footer />
        </>
    );
}
export default Clubs;