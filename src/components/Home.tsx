import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../pages/homepage";

const Home = () => {
    const Navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        if(localStorage.length === 0) {
            Navigate('/');
        }
    }
    return (
        <>
        <Header/>
        <HomePage onLogout = {handleLogout}/>
        <Footer />
        </>
    )
}

export default Home;