import React from 'react';
import '../styles/Header.css';

function Header() {
    const date = new Date().toLocaleDateString();

    // console.log(day)
    return (
        <div className="header">
            
            <div className="header__logo">
                <img 
                    src="https://www.any.do/images/logo.png"
                    alt="logo"
                    className="header__logo--image"
                />
                <h1 className="header__logo--title">
                    Welcome to Todo List
                </h1>
            </div>

            <div className="header__date">
                <h2>Today's Date: { date }</h2>
            </div>
        </div>
    )
}

export default Header
