import React from "react";
import NavbarAdmin from "../../components/NavbarAdmin"
import Footer from "../../components/Footer"
import MiscellaneousContent from "./MiscellaneousContent"

function Miscellaneous() {
    return (
        <>
            <div className="wrapper">
                <NavbarAdmin />
                <MiscellaneousContent />
            </div>
            <Footer />
        </>
    );
}
export default Miscellaneous;