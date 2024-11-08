import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import desktoplogo from './desktoplogo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Synchronize isLoggedIn state with localStorage when the component mounts
    useEffect(() => {
        const storedLoggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(storedLoggedInStatus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigate("/login");
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return ( <
        div className = "bg-white" >
        <
        header className = "bg-gray-50 absolute inset-x-0 top-0 z-50" >
        <
        nav className = "flex items-center justify-between p-6 lg:px-8"
        ariaLabel = "Global" >
        <
        div className = "flex lg:flex-1" >
        <
        Link to = "/"
        className = "-m-5 p-1.5" >
        <
        span className = "sr-only" > Your Company < /span> <
        img className = "h-5 w-auto"
        src = { desktoplogo }
        alt = "Logo" / >
        <
        /Link> <
        /div> <
        div className = "flex lg:hidden" >
        <
        button type = "button"
        className = "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick = { toggleMenu } >
        <
        span className = "sr-only" > Open main menu < /span> <
        svg className = "h-6 w-6"
        fill = "none"
        viewBox = "0 0 24 24"
        strokeWidth = "1.5"
        stroke = "currentColor"
        ariaHidden = "true" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        d = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" / >
        <
        /svg> <
        /button> <
        /div> <
        div className = "hidden lg:flex lg:gap-x-12" >
        <
        Link to = "/"
        className = "text-sm font-semibold leading-6 text-black" > Home < /Link> <
        Link to = "/about"
        className = "text-sm font-semibold leading-6 text-black" > About < /Link> <
        Link to = "/menscloth"
        className = "text-sm font-semibold leading-6 text-black" > Mens < /Link> <
        Link to = "/womencloth"
        className = "text-sm font-semibold leading-6 text-black" > Womens < /Link> <
        Link to = "/kidcloth"
        className = "text-sm font-semibold leading-6 text-black" > Kids < /Link> <
        /div> <
        div className = "hidden lg:flex lg:flex-1 lg:justify-end" >
        <
        Link to = "/cart"
        className = "text-sm font-semibold leading-6 text-black" > Cart < /Link> {
            isLoggedIn ? ( <
                button onClick = { handleLogout }
                className = "text-sm ml-8 font-semibold leading-6 text-black" >
                Logout <
                /button>
            ) : ( <
                Link to = "/login"
                className = "text-sm ml-8 font-semibold leading-6 text-black" >
                Sign in →
                <
                /Link>
            )
        } <
        /div> <
        /nav> {
            isOpen && ( <
                div className = "lg:hidden"
                role = "dialog"
                ariaModal = "true" >
                <
                div className = "fixed inset-0 z-50" > < /div> <
                div className = "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" >
                <
                div className = "flex items-center justify-between" >
                <
                Link to = "/"
                className = "-m-1.5 p-1.5"
                onClick = { handleLinkClick } >
                <
                span className = "sr-only" > Your Company < /span> <
                img className = "h-12 w-15"
                src = { logo }
                alt = "Logo" / >
                <
                /Link> <
                button type = "button"
                className = "-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick = { toggleMenu } >
                <
                span className = "sr-only" > Close menu < /span> <
                svg className = "h-6 w-6"
                fill = "none"
                viewBox = "0 0 24 24"
                strokeWidth = "1.5"
                stroke = "currentColor"
                ariaHidden = "true" >
                <
                path strokeLinecap = "round"
                strokeLinejoin = "round"
                d = "M6 18L18 6M6 6l12 12" / >
                <
                /svg> <
                /button> <
                /div> <
                div className = "mt-6 flow-root" >
                <
                div className = "-my-6 divide-y divide-gray-500/10" >
                <
                div className = "space-y-2 py-6" >
                <
                Link to = "/"
                className = "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                onClick = { handleLinkClick } > Home < /Link> 
                <Link to = "/menscloth"
                className = "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                onClick = { handleLinkClick } > Mens < /Link> <
                Link to = "/womencloth"
                className = "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                onClick = { handleLinkClick } > Womens < /Link> <
                Link to = "/kidcloth"
                className = "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                onClick = { handleLinkClick } > Kids < /Link> <
                a href = "#contact"
                className = "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                onClick = { handleLinkClick } > Contact < /a> <
                /div> <
                div className = "py-6" >
                <
                Link to = "/cart"
                className = "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                onClick = { handleLinkClick } > Cart < /Link> {
                    isLoggedIn ? ( <
                        button onClick = { handleLogout }
                        className = "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50" >
                        Logout <
                        /button>
                    ) : ( <
                        Link to = "/login"
                        className = "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                        onClick = { handleLinkClick } >
                        Sign in
                        <
                        /Link>
                    )
                } <
                /div> <
                /div> <
                /div> <
                /div> <
                /div>
            )
        } <
        /header> <
        /div>
    );
}
