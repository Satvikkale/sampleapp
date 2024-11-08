import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialProducts = [{
        id: 1,
        name: 'Earthen Bottle',
        color: 'N/A',
        price: '$48',
        imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/x/a/l-ttj6007913-tokyo-talkies-original-imagmsxwfmwqm8jv.jpeg?q=70',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        color: 'White',
        price: '$35',
        imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/q/m/w/s-metro-ma09-metronaut-original-imahykpvnfnykqew.jpeg?q=70',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        color: 'Orange/Blue',
        price: '$89',
        imageSrc: 'https://rukminim2.flixcart.com/image/612/612/l02r1jk0/sari/m/p/j/free-2331sj804-siril-unstitched-original-imagbxxwapuvdvph.jpeg?q=70',
    },
    {
        id: 4,
        name: 'Focus Paper Refill',
        color: 'N/A',
        price: '$89',
        imageSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/b/b/m-wc136-women-click-original-imagmmgccedd7sqf.jpeg?q=70',
    },
];

const Womencloth = () => {
    const [visibleProducts, setVisibleProducts] = useState(initialProducts);

    const handleMoreItems = () => {
        setVisibleProducts((prevProducts) => [...prevProducts, ...initialProducts]);
    };

    return ( <
        div className = "bg-white"
        id = "women" >
        <
        div className = "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" >
        <
        h1 className = "mt-7 text-2xl text-center font-bold text-gray-900" > Womens Collections < /h1> <
        div className = "my-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" > {
            visibleProducts.map((product) => ( <
                div key = { product.id }
                className = "group border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
                <
                div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" >
                <
                img src = { product.imageSrc }
                alt = { product.name }
                className = "h-full w-full object-cover object-center group-hover:opacity-75" /
                >
                <
                /div> <
                h3 className = "mt-4 text-sm text-gray-700" > { product.name } < /h3> <
                p className = "mt-1 text-lg font-medium text-gray-900" > { product.price } < /p> <
                Link to = '/cart' > < button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" >
                Add to cart <
                /button></Link >
                <
                /div>
            ))
        } <
        /div> <
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

export default Womencloth;