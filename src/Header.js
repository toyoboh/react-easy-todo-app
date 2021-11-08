import React from 'react'
import "./css/Header.css";
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__appName">
                    React-todo-app
                </div>
                <div className="header__userName">
                    <PersonIcon />
                    shoさん
                </div>
            </div>
        </div>
    )
}

export default Header;
