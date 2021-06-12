import React from "react";
import NavbarAdmin from "../../components/NavbarAdmin"
import ClubContent from "./ClubContent";
import Footer from "../../components/Footer"


function AdminClub()
{
    return (
        <>
            <div className="wrapper">
                <NavbarAdmin />
                <ClubContent />
            </div>
            <Footer />
        </>
    );
}
export default AdminClub;