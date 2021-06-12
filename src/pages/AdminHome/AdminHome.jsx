import React from "react";
import NavbarAdmin from "../../components/NavbarAdmin"
import Footer from "../../components/Footer"
import AdminHomeContent from "./AdminHomeContent"

function AdminHome()
{
    return (
        <>
            <div className="wrapper">
                <NavbarAdmin />
                <AdminHomeContent />
            </div>
            <Footer />
        </>
    );
}
export default AdminHome;