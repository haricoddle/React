import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EmpHomePage = () => {
    const Navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('token');
        if (localStorage.length === 0) {
            Navigate('/');
        }
    }

    return (
        <div>
            <Header />
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <div className="homepage-div">
                <p id="log-mesg">Logged in successfully as Employee</p>
            </div>
            <Footer />
        </div>
    )
}

export default EmpHomePage
