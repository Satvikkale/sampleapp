import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const Kidscloth = () => {

    const initialProducts = [{
            id: 1,
            name: 'Baby Girls Mini/Short Casual Dress',
            description: 'Beige, Half Sleeve',
            price: '$35',
            imageSrc: 'https://rukminim2.flixcart.com/image/832/832/xif0q/kids-dress/b/y/i/3-4-years-mb-tr040323-11-3-4-y-kico-original-imahfyt5b94vvkpr.jpeg?q=70&crop=true',
        },
        {
            id: 2,
            name: 'Angry Birds Girls Calf Length Festive/Wedding Dress',
            description: 'Beige, 3/4 Sleeve',
            price: '$35',
            imageSrc: 'https://rukminim2.flixcart.com/image/832/832/xif0q/kids-dress/i/d/c/4-5-years-fkd-xyla-vivana-original-imah3hjsbbf83dvp.jpeg?q=70&crop=false',
        },
        {
            id: 3,
            name: 'Boys Casual T-shirt',
            description: 'White shirt and pant, Dad\'s Special',
            price: '$35',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/6/z/d/2-3-years-i-love-papa-white-hoodi-kids-zoon-original-imagpuw4peqpf5q7.jpeg?q=70',
        },
        {
            id: 4,
            name: 'Baby Boys Casual T-shirt Shorts',
            description: 'Size 6 - 12 Months, 12 - 18 Months, 18 - 24 Months',
            price: '$35',
            imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/d/l/f/18-24-months-mum-com-04-mumbrella-original-imah4fhzryyu6c3m.jpeg?q=70',
        },
    ];

    const [visibleProducts, setVisibleProducts] = useState(initialProducts);

    const handleMoreItems = () => {
        setVisibleProducts((prevProducts) => [...prevProducts, ...initialProducts]);
    };

    return ( <
        div className = "bg-white"
        id = "kids" >
        <
        div className = "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" >
        <
        h2 className = "mt-10 text-2xl font-bold tracking-tight text-gray-900 text-center" >
        Kids Collections <
        /h2>

        <
        div className = "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" > {
            visibleProducts.map((product) => ( <
                Link to = '/cart' > < div key = { product.id }
                className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
                <
                div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
                <
                img src = { product.imageSrc }
                alt = { product.name }
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
                p className = "mt-1 text-sm text-gray-500" > { product.description } < /p> <
                /div> <
                p className = "text-sm font-medium text-gray-900" > { product.price } < /p> <
                /div> <
                button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" >
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

export default Kidscloth;