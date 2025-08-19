// src/components/Nav.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Nav.css'; // We will create this new CSS file in the next step

// --- Reusable Link Component for Dropdowns ---
// This makes our main component cleaner
const NavLink = ({ item, openDropdown, toggleDropdown, isMobile }) => {
    const hasSubMenu = item.submenu && item.submenu.length > 0;
    const isOpen = openDropdown === item.title;

    if (!hasSubMenu) {
        return (
            <li>
                <a href={item.href} className="nav-item">
                    {item.title}
                </a>
            </li>
        );
    }

    // Dropdown for Mobile (Accordion style)
    if (isMobile) {
        return (
            <li>
                <button onClick={() => toggleDropdown(item.title)} className="nav-item dropdown-btn">
                    <span>{item.title}</span>
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {isOpen && (
                    <ul className="submenu-mobile">
                        {item.submenu.map((subItem) => (
                            <li key={subItem.title}>
                                <a href={subItem.href} className="submenu-item">
                                    {subItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    }

    // Dropdown for Desktop (Hover style)
    return (
        <li className="dropdown-desktop">
            <a href={item.href} className="nav-item">
                {item.title} <FiChevronDown className="inline-icon" />
            </a>
            <ul className="submenu-desktop">
                {item.submenu.map((subItem) => (
                    <li key={subItem.title}>
                        <a href={subItem.href} className="submenu-item">
                            {subItem.title}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );
};


function Nav() {
    // --- STATE MANAGEMENT ---
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [isSeller, setIsSeller] = useState(false); // Simplified from 'utype'
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(''); // For mobile accordions

    // --- API CALLS & LOGIC ---
    useEffect(() => {
        // Set axios to send cookies with requests
        axios.defaults.withCredentials = true;
        axios.get('https://server-f8g6.onrender.com')
            .then(res => {
                console.log(res);
                if (res.data.valid) {
                    setAuth(true);
                    setEmail(res.data.user_email);
                    if (res.data.user === 'seller') {
                        setIsSeller(true);
                    }
                } else {
                    setAuth(false);
                    setIsSeller(false);
                }
            })
            .catch(err => console.log("Auth check error:", err));
    }, []);

    const handleLogout = () => {
        axios.get('https://server-f8g6.onrender.com/logout')
            .then(() => {
                window.location.reload();
                alert("See you soon.");
            })
            .catch(err => console.log("Logout error:", err));
    };

    // --- NAVIGATION DATA (Single Source of Truth) ---
    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/#/About' },
        { title: 'Contact', href: '/#/Contact' },
        {
            title: 'Services',
            href: '#', // Parent link is not clickable
            submenu: [
                { title: 'Buy Material', href: '/#/Products' },
                { title: 'Register as Seller', href: '/#/Seller_registration' },
            ],
        },
    ];

    const accountLinks = auth
        ? [
            { title: 'My Account', href: '/#/Seller_account' },
            ...(isSeller ? [{ title: 'Material Register', href: '/#/Material_reg' }] : []),
            { title: 'Logout', action: handleLogout },
        ]
        : [
            { title: 'Login as User', href: '/#/Login' },
            { title: 'Login as Seller', href: '/#/Seller_login' },
            { title: 'Signup', href: '/#/Signup' },
        ];


    // --- RENDER ---
    return (
        <header className="navbar-header">
            <div className="navbar-container">
                <a href='/' className="navbar-logo">MaterialSeller</a>

                {/* --- Desktop Navigation --- */}
                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map((item) => (
                            <NavLink key={item.title} item={item} isMobile={false} />
                        ))}
                    </ul>
                </nav>

                {/* --- Desktop Account Actions --- */}
                <div className="desktop-account">
                    {auth ? (
                        <div className="dropdown-desktop">
                            <button className="nav-item account-btn">
                                Hello, {email.split('@')[0]} <FiChevronDown className="inline-icon" />
                            </button>
                            <ul className="submenu-desktop account-submenu">
                                {accountLinks.map((link) => (
                                    <li key={link.title}>
                                        {link.action ? (
                                            <a onClick={link.action} className="submenu-item clickable">{link.title}</a>
                                        ) : (
                                            <a href={link.href} className="submenu-item">{link.title}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="auth-buttons">
                            <a href="/#/Login" className="nav-item">Login</a>
                            <a href="/#/Signup" className="nav-item signup-btn">Signup</a>
                        </div>
                    )}
                </div>

                {/* --- Mobile Hamburger Button --- */}
                <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)}>
                    <FiMenu size={28} />
                </button>
            </div>

            {/* --- Mobile Menu Panel (Slide-in) --- */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
            <div className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <h2 className="navbar-logo">Menu</h2>
                    <button onClick={() => setIsMenuOpen(false)}><FiX size={28} /></button>
                </div>
                <nav className="mobile-menu-nav">
                    <ul>
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.title}
                                item={item}
                                openDropdown={openDropdown}
                                toggleDropdown={setOpenDropdown}
                                isMobile={true}
                            />
                        ))}
                        <li className="divider"></li>
                        {accountLinks.map((link) => (
                            <li key={link.title}>
                                {link.action ? (
                                    <a onClick={link.action} className="nav-item clickable">{link.title}</a>
                                ) : (
                                    <a href={link.href} className="nav-item">{link.title}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;