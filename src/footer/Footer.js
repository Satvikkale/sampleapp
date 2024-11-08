import React from "react";

function Footer() {

    const handleSubscribe = () => {
        alert("Message Received.")
    }

    return ( <
        footer className = "bg-gray-800 text-white py-8" >
        <
        div className = "container mx-auto px-4" > { " " } { /* Grid Layout */ } { " " } <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-8" > { " " } { /* Column 1 */ } { " " } <
        div >
        <
        h3 className = "text-xl font-semibold mb-4" > About Us < /h3>{" "} <
        p className = "text-gray-400" >
        We are a company dedicated to providing the best services to our customers.Our mission is to ensure satisfaction and quality. { " " } <
        /p>{" "} <
        /div> { /* Column 2 */ } { " " } <
        div >
        <
        h3 className = "text-xl font-semibold mb-4" > Quick Links < /h3>{" "} <
        ul className = "space-y-2" >
        <
        li >
        <
        a href = "/"
        className = "hover:text-gray-400" > { " " }
        Home { " " } <
        /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#men"
        className = "hover:text-gray-400" > { " " }
        Product { " " } <
        /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "/"
        className = "hover:text-gray-400" > { " " }
        About { " " } <
        /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#contact"
        className = "hover:text-gray-400" > { " " }
        Contact { " " } <
        /a>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div> { /* Column 3 */ } { " " } <
        div >
        <
        h3 className = "text-xl font-semibold mb-4"
        id = "contact" > { " " }
        Contact Us { " " } <
        /h3>{" "} <
        form >
        <
        div className = "flex flex-col space-y-4" >
        <
        input required type = "text"
        placeholder = "email"
        className = "border-3 rounded-lg p-2" /
        >
        <
        textarea type = "text"
        required placeholder = "message"
        className = "border-3 rounded-lg p-2" /
        >
        <
        button onClick = { handleSubscribe }
        className = "border-2 rounded-lg p-1 hover:bg-yellow-100 hover:text-black" > { " " }
        Send { " " } <
        /button> <
        /div>{" "} <
        /form>{" "} <
        /div>{" "} <
        /div> { /* Social Media Links */ } { " " } <
        div className = "mt-8 flex justify-center space-x-4" >
        <
        a href = "/"
        className = "hover:text-gray-400" >
        <
        svg className = "w-6 h-6"
        fill = "currentColor"
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24" >
        <
        path d = "M24 4.5v15c0 .75-.625 1.375-1.375 1.375h-21.25c-.75 0-1.375-.625-1.375-1.375v-15c0-.75.625-1.375 1.375-1.375h21.25c.75 0 1.375.625 1.375 1.375zm-13.563 3.375h-3.062v4.875h3.062v6.75h3.062v-6.75h2.5l.563-4.875h-3.062v-1.25c0-.938.25-1.563 1.563-1.563h1.5v-3c-.25-.063-1.188-.188-2.25-.188-2.313 0-3.875 1.375-3.875 3.938v1.063z" / >
        <
        /svg>{" "} <
        /a>{" "} <
        a href = "/"
        className = "hover:text-gray-400" >
        <
        svg className = "w-6 h-6"
        fill = "currentColor"
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24" >
        <
        path d = "M24 4.5v15c0 .75-.625 1.375-1.375 1.375h-21.25c-.75 0-1.375-.625-1.375-1.375v-15c0-.75.625-1.375 1.375-1.375h21.25c.75 0 1.375.625 1.375 1.375zm-6.188 1.688h-11.625c-1.875 0-3.125 1.25-3.125 3.125v5.25c0 1.875 1.25 3.125 3.125 3.125h11.625c1.875 0 3.125-1.25 3.125-3.125v-5.25c0-1.875-1.25-3.125-3.125-3.125zm-3.312 5.063l-3.938 2.625v-5.25z" / >
        <
        /svg>{" "} <
        /a>{" "} <
        a href = "/"
        className = "hover:text-gray-400" >
        <
        svg className = "w-6 h-6"
        fill = "currentColor"
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24" >
        <
        path d = "M12 0c-6.625 0-12 5.375-12 12 0 5.375 3.5 9.938 8.375 11.563v-8.188h-2.5v-3.375h2.5v-2.625c0-2.438 1.563-3.688 3.625-3.688 1 0 1.875.063 2.125.125v2.438h-1.438c-1.125 0-1.313.563-1.313 1.25v1.875h2.75l-.313 3.375h-2.438v8.125c5.063-1.625 8.563-6.188 8.563-11.563 0-6.625-5.375-12-12-12z" / >
        <
        /svg>{" "} <
        /a>{" "} <
        /div> <
        div className = "text-center mt-4" >
        <
        p className = "text-gray-400" > { " " } &
        copy; 2024 MyBrand.All rights reserved. { " " } <
        /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        /footer>
    );
}

export default Footer;