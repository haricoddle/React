const HomePage: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    return (
            <div className="homepage-div">
                <button onClick={onLogout}>Logout</button>
                <div className="log-mesg">Logged in successfully</div>
            </div>
    )
}

export default HomePage