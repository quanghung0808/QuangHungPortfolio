import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { Nav, NavbarToggler, NavItem } from "reactstrap";

export default function Header(props) {
    const [isNavActive, setNavActive] = useState(false);

    const onOpenToggle = (e) => {
        document.body.classList.remove("menu-is-closed");
        document.body.classList.add("menu-is-opened");
    };

    const onCloseToggle = (e) => {
        document.body.classList.remove("menu-is-opened");
        document.body.classList.add("menu-is-closed");
    };

    const toggleNav = (e) => {
        setNavActive(isNavActive => !isNavActive);
    }

    return (
        <header className="navbar boxed">
            <div className="navbar-bg"></div>
            <Link className="brand" to="/welcome">
                <img className="brand-img" alt="" src="images/brand.png" />
                <div className="brand-info">
                    <div className="brand-name">Quang Hung</div>
                    <div className="brand-text">Web Developer</div>
                </div>
            </Link>
            <button type="button" onClick={onOpenToggle} className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse"
                aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <NavbarToggler onClick={toggleNav} />
            <div className="menu" isOpen={isNavActive}>
                <span onClick={onCloseToggle} className="close-menu icon-cross2 right-boxed"></span>
                <Nav className="menu-list right-boxed">
                    <NavItem>
                        <NavLink to="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/exp-edu">Experience - Education</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/skills">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/achievements">Achievements</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>

            </div>
            <div className="contacts d-none d-md-block">
                <div className="contact-item">
                    +84 862 098 011
                </div>
                <div className="contact-item spacer">
                    /
                </div>
                <div className="contact-item">
                    <a href="mailto:duongquanghung0122@gmail.com">
                        <span>duongquanghung0122@gmail.com</span>
                    </a>
                </div>
            </div>
        </header>
    );
}


