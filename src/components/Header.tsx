import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

const Header = () => {
  const userId = useSelector((state: any) => state.user.id)

    const Navigate = useNavigate();
    const handleMotorcycle = () => {
        Navigate('/vehicles')
    }
    const handleAccessories = () => {
        Navigate('/accessories')
    }
    const handlehome = () => {
        Navigate('/home')
    }

    console.log(userId);

    return (
        <div>
            <header>
                <div className='header-div'>
                    <div className='title-div'>
                        <p onClick={handlehome} onKeyDown = {handlehome} className="header-nav-button">THE MOTOR CORP</p>
                    </div>
                    <div className='services-div p-style'>
                        <p onClick={handleMotorcycle} onKeyDown={handleMotorcycle} className="header-nav-button">MOTORCYCLES</p>
                        <p onClick={handleAccessories} onKeyDown={handleAccessories} className="header-nav-button">ACCESSORIES</p>
                    </div>
                    <div className='users-div p-style'>
                        <p>BOOK NOW</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;