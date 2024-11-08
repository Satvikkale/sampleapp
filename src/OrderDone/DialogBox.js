import React from 'react'
import { Link } from 'react-router-dom'
export default function DialogBox() {
    return ( <
        div className = "min-h-[10rem] p-4" >
        <
        div className = "relative z-10 justify-center"
        ariaLabelledby = "modal-title"
        role = "dialog"
        ariaModal = "true" >
        <
        div className = "fixed inset-0 bg-gray-800 bg-opacity-90 transition-opacity"
        ariaHidden = "true" > < /div>

        <
        div className = "fixed inset-0 z-10 w-screen overflow-y-auto" >
        <
        div className = "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" >
        <
        div className = "mb-40 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" >
        <
        div className = "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4" >
        <
        div className = "sm:flex sm:items-start" >
        <
        div className = "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" >
        <
        div className = "h-6 w-6 text-red-600"
        fill = "none"
        viewBox = "0 0 24 24"
        strokeWidth = "1.5"
        stroke = "currentColor"
        ariaWidden = "true" > ✅
        <
        /div> <
        /div> <
        div className = "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" >
        <
        h3 className = "text-base font-semibold leading-6 text-gray-900"
        id = "modal-title" > Payment successful < /h3> <
        div className = "mt-2" >
        <
        p className = "text-sm text-gray-500" > Thank You
        for Ordering the product. < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" >
        <
        Link to = "/" > < button type = "button"
        className = "inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto" > Continue Ordering < /button></Link > { /* <Link to="/"><button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto">Back to Dashboard</button></Link> */ } <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    )
}