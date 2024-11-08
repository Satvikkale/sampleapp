import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
    const [selectedMethod, setSelectedMethod] = useState('');

    const paymentMethods = [
        { id: 'card', label: 'Credit / Debit Card' },
        { id: 'upi', label: 'UPI' },
        { id: 'netbanking', label: 'Net Banking' },
        { id: 'cod', label: 'Cash on Delivery' },
    ];

    const handleMethodClick = (methodId) => {
        if (selectedMethod === methodId) {
            setSelectedMethod(''); // Deselect if already selected
        } else {
            setSelectedMethod(methodId); // Select the clicked method
        }
    };

    return ( <
        div className = "min-h-screen bg-gray-100 p-4" >
        <
        div className = "mt-20 max-w-2xl mx-auto bg-white p-6 shadow-lg border-2 rounded-lg" >
        <
        h2 className = "text-2xl font-semibold mb-6" > Select Payment Method < /h2>

        <
        div className = "space-y-4" > {
            paymentMethods.map(method => ( <
                div key = { method.id }
                onClick = {
                    () => handleMethodClick(method.id) }
                className = { `cursor-pointer p-4 border rounded-lg flex justify-between items-center ${
                selectedMethod === method.id ? 'border-blue-700' : 'border-gray-500'
              }` } >
                <
                span > { method.label } < /span> {
                    selectedMethod === method.id && ( <
                        svg className = "w-6 h-6 text-blue-500"
                        fill = "none"
                        stroke = "currentColor"
                        viewBox = "0 0 24 24"
                        xmlns = "http://www.w3.org/2000/svg" >
                        <
                        path strokeLinecap = "round"
                        strokeLinejoin = "round"
                        strokeWidth = "2"
                        d = "M5 13l4 4L19 7" >
                        < /path> <
                        /svg>
                    )
                } <
                /div>
            ))
        } <
        /div>

        <
        div className = "mt-8" > {
            selectedMethod === 'card' && ( <
                div className = "space-y-4" >
                <
                input type = "text"
                placeholder = "Card Number"
                className = "w-full p-3 border-2 rounded-lg" /
                >
                <
                input type = "text"
                placeholder = "Name on Card"
                className = "w-full p-3 border rounded-lg" /
                >
                <
                div className = "flex space-x-4" >
                <
                input type = "text"
                placeholder = "Expiry Date (MM/YY)"
                className = "w-1/2 p-3 border rounded-lg" /
                >
                <
                input type = "text"
                placeholder = "CVV"
                className = "w-1/2 p-3 border rounded-lg" /
                >
                <
                /div> <
                /div>
            )
        } {
            selectedMethod === 'upi' && ( <
                div className = "space-y-4" >
                <
                input type = "text"
                placeholder = "UPI ID"
                className = "w-full p-3 border rounded-lg" /
                >
                <
                /div>
            )
        } {
            selectedMethod === 'netbanking' && ( <
                div className = "space-y-4" >
                <
                select className = "w-full p-3 border rounded-lg" >
                <
                option > Select Bank < /option> <
                option > SBI < /option> <
                option > HDFC < /option> <
                option > ICICI < /option> <
                /select> <
                /div>
            )
        } {
            selectedMethod === 'cod' && ( <
                div className = "space-y-4" >
                <
                p className = "text-gray-600" >
                Pay with cash upon delivery.Exact change would be appreciated. <
                /p> <
                /div>
            )
        } <
        /div>

        <
        Link to = "/dialog" > < button className = "cursor-pointer mt-8 w-full bg-blue-700 text-white p-3 rounded-lg"
        disabled = {!selectedMethod } >
        Proceed to Pay <
        /button></Link >
        <
        /div> <
        /div>
    );
};

export default PaymentPage;