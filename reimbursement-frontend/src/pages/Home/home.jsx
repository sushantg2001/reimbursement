import React from "react";
import Navbar from "../../components/Navbar"
import HomeContent from "./homeContent"
import Footer from "../../components/Footer"

/* Landing Page for the reimbursement Portal. 
    This page lets the user submit their claim for the reimbursement under the permissible category. 
*/

function Home() {
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