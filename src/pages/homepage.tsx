import { useNavigate } from "react-router-dom";
import img1 from '../images/show-bike-img.jpg'
import img2 from '../images/accessories-img.jpg'
import img3 from '../images/bike-service-img.jpg'

const HomePage = () => {
    const Navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('token');
        if(localStorage.length === 0) {
            Navigate('/');
        }
    }

    function handleShowVehicle() {
        Navigate('/vehicles')
    }

    function handleAccessories() {
        Navigate('/accessories')
    }

    function handleServiceBooking() {
        Navigate('/bookService')
    }
    return (
            <div className="homepage-div">
                <button onClick={handleLogout}>Logout</button>
                <div className="log-mesg">
                <figure>
                    <img  className='show-bike-img image-config' src={img1} alt="Show bike" />
                    <p onClick={handleShowVehicle} onKeyDown={handleShowVehicle}> Show vehicles <i className="fa fa-arrow-circle-right"></i></p>
                </figure>
                <figure>
                    <img className="bike-accessory-img image-config" src={img2} alt="bike accessory" />
                    <p onClick={handleAccessories} onKeyDown={handleAccessories}>Show accessories <i className="fa fa-arrow-circle-right"></i></p>
                </figure>
                <figure>
                    <img className="bike-service image-config" src={img3} alt="Bike service"/>
                    <p onClick={handleServiceBooking} onKeyDown={handleServiceBooking}> Book service <i className="fa fa-arrow-circle-right"></i></p>

                </figure>
                </div>
            </div>
    )
}

export default HomePage
