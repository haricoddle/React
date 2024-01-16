import React from "react";
import withTokenCheck from "./HOC/HeaderHOC";

const Header = (props: any) => {

    return (
        <div>
            <header>
                <div className='header-div'>
                    <div className='title-div'>
                        <p onClick={() => props.handleAuth('/home')} onKeyDown={() => props.handleAuth('/home')} className="header-nav-button">THE MOTOR CORP</p>
                    </div>
                    <div className='services-div p-style'>
                        <p onClick={() => props.handleAuth('/vehicles')} onKeyDown={() => props.handleAuth('/vehicles')} className="header-nav-button">MOTORCYCLES</p>
                        <p onClick={() => props.handleAuth('/accessories')} onKeyDown={() => props.handleAuth('/accessories')} className="header-nav-button">ACCESSORIES</p>
                    </div>
                    <div className='users-div p-style'>
                        <p onClick={() => props.handleAuth('/bookings')} onKeyDown={() => props.handleAuth('/bookings')} className="header-nav-button">BOOK NOW</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default withTokenCheck(Header);
