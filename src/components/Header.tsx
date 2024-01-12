import { useNavigate } from "react-router-dom"

const Header = () => {

    const Navigate = useNavigate();

    function handleMotorcycle() {
        if (localStorage.getItem('token')) {
            Navigate('/vehicles');
        } else {
            alert('Please Login before using the services');
            Navigate('/')
        }
    }
    function handleAccessories() {
        if (localStorage.getItem('token')) {
            Navigate('/accessories');
        } else {
            alert('Please Login before using the services');
            Navigate('/')
        }
    }
    function handlehome() {
        if (localStorage.getItem('token')) {
            Navigate('/home');
        } else {
            alert('Please Login before using the services');
            Navigate('/')
        }
    }

    function handleBooking() {
        if (localStorage.getItem('token')) {
            Navigate('/bookings');
        } else {
            alert('Please Login before using the services');
            Navigate('/')
        }
    }

    return (
        <div>
            <header>
                <div className='header-div'>
                    <div className='title-div'>
                        <p onClick={handlehome} onKeyDown={handlehome} className="header-nav-button">THE MOTOR CORP</p>
                    </div>
                    <div className='services-div p-style'>
                        <p onClick={handleMotorcycle} onKeyDown={handleMotorcycle} className="header-nav-button">MOTORCYCLES</p>
                        <p onClick={handleAccessories} onKeyDown={handleAccessories} className="header-nav-button">ACCESSORIES</p>
                    </div>
                    <div className='users-div p-style'>
                        <p onClick={handleBooking} onKeyDown={handleBooking} className="header-nav-button">BOOK NOW</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;