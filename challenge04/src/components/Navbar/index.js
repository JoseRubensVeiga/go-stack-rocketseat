import React from 'react';

import './style.css';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';

function Navbar() {
    return (
        <nav>
            <img src={logo} />
            <div className="my-profile">
                Meu Perfil
                <img src={user} className="user-logo"/>
            </div>
        </nav>
    )
}

export default Navbar;