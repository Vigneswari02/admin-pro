import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/img/logo-sm.png';
import LogoLg from '../assets/img/logo-white.png';
import Profile from '../assets/img/profile.png';
import '../assets/css/style.css';

const Sidebar = (props) => {
    const [subMenu, setSubMenu] = useState({ uielements: false, auth: false });
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const toggleSubMenu = (name) => {
        setSubMenu({ ...subMenu, [name]: !subMenu[name] });
    };

    return (
        <div className={`sidebar ${props.showNav ? " sidebar-lg" : "sidebar-sm"}`}>
            <div className='sidebar-header'>
                <img src={Logo} alt='logo' className={`${props.showNav ? "logo-hide" : "logo-sm"}`} />
                <img src={LogoLg} alt='logo' className={`${props.showNav ? "logo" : "logo-hide"}`} />
                <span className='sidebar-x float-end' onClick={() => props.setShowNav(props.showNav)}><i className="bi bi-x"></i></span>
            </div>
            <div className='sidebar-menu'>
                <ul className='sidebar-content'>
                    <li className='sidebar-menu-inner'>
                        <a href="/home">
                            <i className="bi bi-house"></i>
                            <span className={`${props.showNav ? "side-item" : "hide-item"}`}>Home</span>
                        </a>
                    </li>
                    <li className='sidebar-menu-inner '>
                        <div className='d-flex' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <span className={`d-flex${props.showNav ? "side-item" : "hide-item"}`} onClick={() => toggleSubMenu("uielements")}> 
                                <i className="bi bi-speedometer2" ></i>
                                <span className={`${props.showNav ? "side-item" : "hide-item"}`} >
                                    UI Elements
                                    <i className={`bi bi-chevron-down dropdown ${subMenu.uielements ? "rotate" : ""}`}></i>
                                </span>
                            </span>
                            {isDropdownVisible && (
                                <div className={`side-hover-item ${subMenu.uielements ? "" : "hide"}`}>
                                    <ul className='ishover-item'>
                                        <span>
                                            UI Elements
                                            <i className={`bi bi-chevron-down dropdown ${subMenu.uielements ? "rotate" : ""}`}></i>
                                        </span>
                                        <li>
                                            <a href="accordion" className="sub-item">
                                                <span >Accordion</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="alert" className="sub-item">
                                                Alert
                                            </a>
                                        </li>
                                        <li>
                                            <a href="card" className="sub-item">
                                                Card
                                            </a>
                                        </li>
                                        <li>
                                            <a href="carousel" className="sub-item">
                                                Carousel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="modal" className="sub-item">
                                                Modal
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <ul className={`sub-menu ${subMenu.uielements ? "" : "hide"} ${props.showNav ? "" : "hide"}`} >
                            <li>
                                <a href="accordion" className="sub-item">
                                    <span className={`${props.showNav ? "" : "hide-item"}`}>Accordion</span>
                                </a>
                            </li>
                            <li>
                                <a href="alert" className="sub-item">
                                    Alert
                                </a>
                            </li>
                            <li>
                                <a href="card" className="sub-item">
                                    Card
                                </a>
                            </li>
                            <li>
                                <a href="carousel" className="sub-item">
                                    Carousel
                                </a>
                            </li>
                            <li>
                                <a href="modal" className="sub-item">
                                    Modal
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='sidebar-menu-inner'>
                        <a href="form">
                            <i className="bi bi-person"></i>
                            <span className={`${props.showNav ? "side-item" : "hide-item"}`}>Forms</span>
                        </a>
                    </li>
                    <li className='sidebar-menu-inner'>
                        <a href="table">
                            <i className="bi bi-briefcase"></i>
                            <span className={`${props.showNav ? "side-item" : "hide-item"}`}>Table</span>
                        </a>
                    </li>
                    <li className='sidebar-menu-inner'>
                        <span className={`d-flex${props.showNav ? "side-item" : "hide-item"}`} onClick={() => toggleSubMenu("auth")}>
                            <i className="bi bi-speedometer2"></i>
                            <span className={`${props.showNav ? "side-item" : "hide-item"}`}>
                                Authentication
                                <i className={`bi bi-chevron-down dropdown ${subMenu.auth ? "rotate" : ""}`}></i>
                            </span>
                        </span>
                        <ul className={`sub-menu ${subMenu.auth ? "" : "hide"} ${props.showNav ? "" : "hide"}`} >
                            <li>
                                <a href="/" className="sub-item">
                                    <span className={`${props.showNav ? "" : "hide-item"}`}>Login</span>
                                </a>
                            </li>
                            <li>
                                <a href="register" className="sub-item">
                                    <span className={`${props.showNav ? "" : "hide-item"}`}>Register</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='sidebar-footer'>
                <div className='sidebar-profile'>
                    <img src={Profile} alt='Profile' className={`${props.showNav ? "sidebar-profile-lg" : "sidebar-profile-sm"}`} />
                    <h5 className={`${props.showNav ? "side-item" : "hide-item"}`}>Admin</h5>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
