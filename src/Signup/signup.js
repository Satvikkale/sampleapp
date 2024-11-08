import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const cpassword = useRef();
    const navigate = useNavigate();

    const handleSignUp = () => {
        const storedEmail = localStorage.getItem("email");

        if (storedEmail === email.current.value) {
            alert("Account already exists, please log in.");
            navigate("/login");
        } else if (password.current.value === cpassword.current.value) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            alert("Account created successfully");
            navigate("/login");
        } else {
            alert("Passwords do not match");
        }
    };

    return ( <
        div className = "my-8" >
        <
        div className = "flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" >
        <
        div className = "sm:mx-auto sm:w-full sm:max-w-sm" >
        <
        h2 className = "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" >
        Create account <
        /h2> <
        /div> <
        div className = "mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
        <
        form className = "space-y-6" >
        <
        div >
        <
        label htmlFor = "name"
        className = "block text-sm font-medium leading-6 text-gray-900" >
        Name <
        /label> <
        div className = "mt-2" >
        <
        input ref = { name }
        id = "name"
        name = "name"
        type = "text"
        placeholder = "enter name"
        required className = "block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /
        >
        <
        /div> <
        /div> <
        div >
        <
        label htmlFor = "email"
        className = "block text-sm font-medium leading-6 text-gray-900" >
        Email address <
        /label> <
        div className = "mt-2" >
        <
        input ref = { email }
        id = "email"
        name = "email"
        type = "email"
        placeholder = "enter email"
        required className = "block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /
        >
        <
        /div> <
        /div> <
        div >
        <
        label htmlFor = "password"
        className = "block text-sm font-medium leading-6 text-gray-900" >
        Password <
        /label> <
        div className = "mt-2" >
        <
        input ref = { password }
        id = "password"
        name = "password"
        type = "password"
        placeholder = "enter password"
        required className = "block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /
        >
        <
        /div> <
        /div> <
        div >
        <
        label htmlFor = "cpassword"
        className = "block text-sm font-medium leading-6 text-gray-900" >
        Confirm Password <
        /label> <
        div className = "mt-2" >
        <
        input ref = { cpassword }
        id = "cpassword"
        name = "cpassword"
        type = "password"
        placeholder = "confirm password"
        required className = "block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /
        >
        <
        /div> <
        /div> <
        div >
        <
        button onClick = { handleSignUp }
        type = "button"
        className = "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
        Sign up <
        /button> <
        /div> <
        /form> <
        p className = "mt-10 text-center text-sm text-gray-500" >
        If you are already a user, { " " } <
        Link to = "/login"
        className = "font-semibold leading-6 text-indigo-600 hover:text-indigo-500" >
        sign in
        <
        /Link> <
        /p> <
        /div> <
        /div> <
        /div>
    );
}