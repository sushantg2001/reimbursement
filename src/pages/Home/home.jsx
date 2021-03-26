import React from "react";
import Navbar from "../../components/Navbar"
import HomeContent from "./homeContent"
import Footer from "../../components/Footer"

function Home()
{
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <HomeContent />

            </div>
            <Footer />
        </>
    );
}
export default Home;