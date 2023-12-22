import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const Navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('token');
        if(localStorage.length === 0) {
            Navigate('/');
        }
    }

    return (
            <div className="homepage-div">
                <button onClick={handleLogout}>Logout</button>
                <div className="log-mesg">Logged in successfully</div>
            </div>
    )
}

export default HomePage
