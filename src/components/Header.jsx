import React, { useState, useEffect } from 'react';
import Profile from '../assets/img/profile.png';
import { Col, Row, FormControl, InputGroup } from 'react-bootstrap';

const Header = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false);

    const toggleSearchBox = () => {
        setShowSearchBox(!showSearchBox);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header sticky-top ${props.showNav ? 'header-sm' : ''} ${isActive ? 'header-bg' : ''}`}>
            <Row className='head-row d-flex'>
                <Col className='d-flex'>
                    <div className="side-btn">
                        <div className={`toggle-btn ${props.showNav ? 'rotate' : ''}`}>
                            <i onClick={() => props.setShowNav(props.showNav)} className="bi bi-arrow-right-circle"></i>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="header-icon float-end">
                        <a onClick={toggleSearchBox}>
                            <i className="bi bi-search"></i>
                        </a>
                        <a href='#a' className="chat">
                            <i className="bi bi-chat-left"></i>
                        </a>
                        <a href='#a' className="notify">
                            <i className="bi bi-app-indicator"></i>
                        </a>
                        <img src={Profile} alt='Profile' width={'55'} className='header-profile' />
                    </div>
                </Col>
            </Row>
            {showSearchBox ? (
                <Row className='search-box-row'>
                    <Col>
                        <div className="search-box">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <button className="btn btn-outline-secondary" onClick={toggleSearchBox}>
                                        Close
                                    </button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            ) : (null)}
        </div>
    );
};

export default Header;
