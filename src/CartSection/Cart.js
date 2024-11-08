import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
    const [cartItems, setCartItems] = useState([{
            id: 1,
            name: "Throwback Hip Bag",
            price: 90.0,
            qty: 1,
            color: "Salmon",
            image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        },
        {
            id: 2,
            name: "Medium Stuff Satchel",
            price: 32.0,
            qty: 1,
            color: "Blue",
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/x/a/l-ttj6007913-tokyo-talkies-original-imagmsxwfmwqm8jv.jpeg?q=70",
        },
        // Add more items as needed
    ]);

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    };

    return ( <
        div >
        <
        div className = "bg-white" >
        <
        div className = "mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8" >
        <
        h2 className = "mt-10 text-2xl font-bold tracking-tight text-black text-start" >
        Shopping <
        /h2>

        <
        div className = "mt-10" >
        <
        div className = "flow-root" >
        <
        ul className = "-my-6 divide-y divide-gray-200" > {
            cartItems.map((item) => ( <
                li key = { item.id }
                className = "flex py-6" >
                <
                div className = "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200" >
                <
                img src = { item.image }
                alt = { item.name }
                className = "h-full w-full object-cover object-center" /
                >
                <
                /div> <
                div className = "ml-4 flex flex-1 flex-col" >
                <
                div >
                <
                div className = "flex justify-between text-base font-medium text-gray-900" >
                <
                h3 > { item.name } < /h3> <
                p className = "ml-4" > $ { item.price.toFixed(2) } < /p> <
                /div> <
                p className = "mt-1 text-sm text-gray-500" > { item.color } < /p> <
                /div> <
                div className = "flex flex-1 items-end justify-between text-sm" >
                <
                p className = "text-gray-500" > Qty { item.qty } < /p> <
                div className = "flex" >
                <
                button type = "button"
                onClick = {
                    () => handleRemove(item.id) }
                className = "font-medium text-indigo-600 hover:text-indigo-500" >
                Remove <
                /button> <
                /div> <
                /div> <
                /div> <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div> <
        /div> <
        div className = "border-t border-gray-200 px-4 py-6 sm:px-6" >
        <
        div className = "flex justify-between text-base font-medium text-gray-900" >
        <
        p > Subtotal < /p> <
        p > $ { calculateSubtotal().toFixed(2) } < /p> <
        /div> <
        p className = "mt-0.5 text-sm text-gray-500" >
        Shipping and taxes calculated at checkout. <
        /p> <
        div className = "mt-6" >
        <
        Link to = "/payment"
        className = "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" >
        Place Order <
        /Link> <
        /div> <
        div className = "mt-6 flex justify-center text-center text-sm text-gray-500" >
        <
        p >
        or <
        Link to = "/" >
        <
        button type = "button"
        className = "font-medium text-indigo-600 hover:text-indigo-500" >
        Continue Shopping <
        /button> <
        /Link> <
        /p> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}