import React from 'react'
import Navbar from './Navbar/Navbar';
import Mainpage from './main page/Mainpage';
import Footer from './footer/Footer';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Login from './Login/Login';
import Signup from './Signup/signup';
import Menscloth from './MensCloth/menscloth';
import Womencloth from './Womenscloth/Womencloth';
import Kidscloth from './KidsCloth/Kidscloth';
import Cart from './CartSection/Cart';
import PaymentPage from './PaymentSection/PaymentPage';
import DialogBox from './OrderDone/DialogBox';


export default function App() {


    return ( <
        div className = 'App' >
        <
        BrowserRouter >
        <
        Navbar / >

        <
        Routes >
        <
        Route path = "/login"
        element = { < Login / > } > < /Route> <
        Route path = "/signup"
        element = { < Signup / > } > < /Route> <
        Route path = "/menscloth"
        element = { < Menscloth / > } > < /Route> <
        Route path = "/womencloth"
        element = { < Womencloth / > } > < /Route> <
        Route path = "/kidcloth"
        element = { < Kidscloth / > } > < /Route> <
        Route path = "/"
        element = { < Mainpage / > } > < /Route> <
        Route path = "/cart"
        element = { < Cart / > } > < /Route> <
        Route path = "/payment"
        element = { < PaymentPage / > } > < /Route> <
        Route path = "/dialog"
        element = { < DialogBox / > } > < /Route>

        <
        /Routes> <
        /BrowserRouter>

        <
        Footer / >
        <
        /div>
    )
}