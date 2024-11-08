import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menscloth = () => {

    const products = [{
            id: 1,
            name: 'Basic Tee',
            color: 'Black',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        },
        {
            id: 2,
            name: 'Basic Tee',
            color: 'Black',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        },
        {
            id: 3,
            name: 'Basic Tee',
            color: 'Khaki',
            price: '$35',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/k0zlsi80/t-shirt/z/a/n/m-9973403-roadster-original-imafkmfvpucuwbdq.jpeg?q=70',
        },
        {
            id: 4,
            name: 'Basic Tee',
            color: 'Gray',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        },
    ];

    const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 4));

    const handleMoreItems = () => {
        setVisibleProducts((prevProducts) => [...prevProducts, ...products]);
    };

    return ( <
        div className = "bg-white" >
        <
        div className = "mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8" >
        <
        h2 className = " mt-10 text-2xl font-bold tracking-tight text-black text-center" >
        Mens Collections <
        /h2>

        <
        div className = "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" > {
            visibleProducts.map((product) => ( <
                Link to = "/cart" > < div key = { product.id }
                className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
                <
                div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
                <
                img src = { product.imageSrc }
                alt = { `Front of men's ${product.name} in ${product.color}.` }
                className = "h-full w-full object-cover object-center lg:h-full lg:w-full" /
                >
                <
                /div> <
                div className = "mt-4 flex justify-between" >
                <
                div >
                <
                h3 className = "text-sm text-gray-700" >
                <
                span ariaHidden = "true"
                className = "absolute inset-0" > < /span> { product.name } <
                /h3> <
                p className = "mt-1 text-sm text-gray-500" > { product.color } < /p> <
                /div> <
                p className = "text-sm font-medium text-gray-900" > { product.price } < /p> <
                /div> <
                button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md" >
                Add to cart <
                /button> <
                /div></Link >
            ))
        } <
        /div>

        <
        div className = "flex justify-center p-2 border-black" >
        <
        button className = "mt-6 w-[40%] bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700"
        onClick = { handleMoreItems } >
        More Items <
        /button> <
        /div> <
        /div> <
        /div>
    );
};

export default Menscloth;