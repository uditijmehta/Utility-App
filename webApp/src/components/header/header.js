import logo from '../../logo2.svg';
import './header.scss';
import React from 'react'
import {Navbar, Nav, NavItem, Alert} from 'react-bootstrap';

export class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <div className="header_main">
                    <img className="header_logo" src={logo}/>
                    <h1>test</h1>
                
                </div>
            </Navbar>
        )

    }
}

// export default Header;