import React from 'react'
import { Link } from 'react-router-dom';

export default function Mainpage() {
    return ( <
        div > { /* hero section */ }

        <
        div className = "relative isolate px-6 pt-2 lg:px-8" >
        <
        div className = "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ariaHidden = "true" >
        <
        /div> <
        div className = "mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" >
        <
        div className = "hidden sm:mb-8 sm:flex sm:justify-center" >
        <
        div className = "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20" >
        Get ready to grap the sell. < a href = "#men"
        className = "font-semibold text-indigo-600" > < span className = "absolute inset-0"
        ariaHidden = "true" > < /span>buy now <span ariaHidden="true">&rarr;</span > < /a> <
        /div> <
        /div> <
        div className = "text-center" >
        <
        h2 className = "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" > Shop the Latest Trends, Anytime, Anywhere < /h2> <
        p className = "mt-6 text-lg leading-8 text-gray-600" > Discover the latest in fashion, crafted
        for your unique style.Shop our curated collections and elevate your wardrobe with pieces that speak to you.Quality, style, and convenience— delivered right to your door. < /p> <
        div className = "mt-10 flex items-center justify-center gap-x-6" >
        <
        Link to = "/"
        className = "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" > Get started < /Link> <
        Link to = "/"
        className = "text-sm font-semibold leading-6 text-gray-900" > Learn more < span ariaHidden = "true" > → < /span></Link >
        <
        /div> <
        /div> <
        /div> <
        div className = "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ariaHidden = "true" >
        <
        /div> <
        /div> { /* close hero section */ }

        <
        div className = 'h-[1px] w-[100%] bg-black' > < /div>

        { /* Mens Collections section */ }

        <
        div className = "bg-white"
        id = 'men' >
        <
        div className = "mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8" >
        <
        h2 className = "text-2xl font-bold tracking-tight text-black text-center" > Mens Collections < /h2>

        <
        div className = "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
        <
        Link to = '/cart' > < div className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
        <
        img src = "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        alt = "Front of men&#039;s Basic Tee in black."
        className = "h-full w-full object-cover object-center lg:h-full lg:w-full" / >
        <
        /div> <
        div className = "mt-4 flex justify-between" >
        <
        div >
        <
        h3 className = "text-sm text-gray-700" >
        <
        span ariaHidden = "true"
        className = "absolute inset-0" > < /span>
        Basic Tee <
        /h3> <
        p className = "mt-1 text-sm text-gray-500" > Black < /p> <
        /div> <
        p className = "text-sm font-medium text-gray-900" > $35 < /p>                             <
        /div> <
        button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md " > Add to cart < /button> <
        /div></Link >

        <
        Link to = '/cart' > < div className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
        <
        img src = "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
        alt = "Front of men's Basic Tee in black."
        className = "h-full w-full object-cover object-center lg:h-full lg:w-full" / >
        <
        /div> <
        div className = "mt-4 flex justify-between" >
        <
        div >
        <
        h3 className = "text-sm text-gray-700" >
        <
        span ariaHidden = "true"
        className = "absolute inset-0" > < /span>
        Basic Tee <
        /h3> <
        p className = "mt-1 text-sm text-gray-500" > Black < /p> <
        /div> <
        p className = "text-sm font-medium text-gray-900" > $35 < /p> <
        /div> <
        button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md " > Add to cart < /button> <
        /div></Link >

        <
        Link to = '/cart' > < div className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
        <
        img src = "https://rukminim2.flixcart.com/image/612/612/k0zlsi80/t-shirt/z/a/n/m-9973403-roadster-original-imafkmfvpucuwbdq.jpeg?q=70"
        alt = "Front of men&#039;s Basic Tee in black."
        className = "h-full w-full object-cover object-center lg:h-full lg:w-full" / >
        <
        /div> <
        div className = "mt-4 flex justify-between" >
        <
        div >
        <
        h3 className = "text-sm text-gray-700" >
        <
        span ariaidden = "true"
        className = "absolute inset-0" > < /span>
        Basic Tee <
        /h3> <
        p className = "mt-1 text-sm text-gray-500" > khaki < /p> <
        /div> <
        p className = "text-sm font-medium text-gray-900" > $35 < /p> <
        /div> <
        button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md " > Add to cart < /button> <
        /div></Link >

        <
        Link to = '/cart' > < div className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
        <
        img src = "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
        alt = "Front of men&#039;s Basic Tee in black."
        className = "h-full w-full object-cover object-center lg:h-full lg:w-full" / >
        <
        /div> <
        div className = "mt-4 flex justify-between" >
        <
        div >
        <
        h3 className = "text-sm text-gray-700" >
        <
        span ariaidden = "true"
        className = "absolute inset-0" > < /span>
        Basic Tee <
        /h3> <
        p className = "mt-1 text-sm text-gray-500" > gray < /p> <
        /div> <
        p className = "text-sm font-medium text-gray-900" > $35 < /p> <
        /div> <
        button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md" > Add to cart < /button> <
        /div></Link >
        <
        /div> <
        div className = 'flex justify-center p-2 border-black' >
        <
        Link to = '/menscloth' > < button className = " mt-6 w-[16rem] bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > More Items < /button></Link >
        <
        /div> <
        /div> <
        /div>


        { /* end men section */ }

        <
        div className = 'h-[1px] w-[100%] bg-black' > < /div>

        { /* womens were */ }

        <
        div className = "bg-white"
        id = 'women' >
        <
        div className = "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" >
        <
        h1 className = "text-2xl text-center font-bold text-gray-900" > Womens Collections < /h1> <
        div className = "my-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" >
        <
        div className = "group border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" >
        <
        img src = "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/x/a/l-ttj6007913-tokyo-talkies-original-imagmsxwfmwqm8jv.jpeg?q=70"
        alt = "Tall slender porcelain bottle with natural clay textured body and cork stopper."
        className = "h-full w-full object-cover object-center group-hover:opacity-75" / >
        <
        /div> <
        h3 className = "mt-4 text-sm text-gray-700" > Earthen Bottle < /h3> <
        p className = "mt-1 text-lg font-medium text-gray-900" > $48 < /p> <
        Link to = '/cart' > < button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > Add to cart < /button></Link >
        <
        /div> <
        div className = "group border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" >
        <
        img src = "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/q/m/w/s-metro-ma09-metronaut-original-imahykpvnfnykqew.jpeg?q=70"
        alt = "Olive drab green insulated bottle with flared screw lid and flat top."
        className = "h-full w-full object-cover object-center group-hover:opacity-75" / >
        <
        /div> <
        h3 className = "mt-2 text-sm text-gray-700" > Nomad Tumbler < /h3> <
        h3 className = "mt-2 text-sm text-gray-700" > white < /h3> <
        p className = "mt-1 text-lg font-medium text-gray-900" > $35 < /p> <
        Link to = '/cart' > < button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > Add to cart < /button></Link >
        <
        /div> <
        div className = "group border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" >
        <
        img src = "https://rukminim2.flixcart.com/image/612/612/l02r1jk0/sari/m/p/j/free-2331sj804-siril-unstitched-original-imagbxxwapuvdvph.jpeg?q=70"
        alt = "Person using a pen to cross a task off a productivity paper card."
        className = "h-full w-full object-cover object-center group-hover:opacity-75" / >
        <
        /div> <
        h3 className = "mt-2 text-sm text-gray-700" > Focus Paper Refill < /h3> <
        h3 className = "mt-2 text-sm text-gray-700" > Orange / blue < /h3> <
        p className = "mt-1 text-lg font-medium text-gray-900" > $89 < /p> <
        Link to = '/cart' > < button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > Add to cart < /button></Link >
        <
        /div>

        <
        div className = "group border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" >
        <
        img src = "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/b/b/m-wc136-women-click-original-imagmmgccedd7sqf.jpeg?q=70"
        alt = "Person using a pen to cross a task off a productivity paper card."
        className = "h-full w-full object-cover object-center group-hover:opacity-75" / >
        <
        /div> <
        h3 className = "mt-4 text-sm text-gray-700" > Focus Paper Refill < /h3> <
        p className = "mt-1 text-lg font-medium text-gray-900" > $89 < /p> <
        Link to = '/cart' > < button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > Add to cart < /button></Link >
        <
        /div>

        { /* <!-- More products... --> */ } <
        /div> <
        div className = 'flex justify-center p-2 border-black' >
        <
        Link to = "/womencloth" > < button className = " mt-6 w-[16rem] bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > More Items < /button></Link >
        <
        /div> <
        /div> <
        /div>

        { /* close women section */ }

        <
        div className = 'h-[1px] w-[100%] bg-black' > < /div>

        { /* kids section */ }

        <
        div className = "bg-white"
        id = 'kids' >
        <
        div className = "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" >
        <
        h2 className = "text-2xl font-bold tracking-tight text-gray-900 text-center" > Kids Collections < /h2>

        <
        div className = "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
        <
        Link to = '/cart' > < div className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
        <
        img src = "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-dress/b/y/i/3-4-years-mb-tr040323-11-3-4-y-kico-original-imahfyt5b94vvkpr.jpeg?q=70&crop=true"
        alt = "Front of men&#039;s Basic Tee in black."
        className = "h-full w-full object-cover object-center lg:h-full lg:w-full" / >
        <
        /div> <
        div className = "mt-4 flex justify-between" >
        <
        div >
        <
        h3 className = "text-sm text-gray-700" >

        <
        span ariaHidden = "true"
        className = "absolute inset-0" > < /span>
        Baby Girls Mini / Short Casual Dress(Beige, Half Sleeve) <
        /h3> <
        p className = "mt-1 text-sm text-gray-500" > Special price < /p> <
        /div> <
        p className = "text-sm font-medium text-gray-900" > $35 < /p> <
        /div> <
        button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > Add to cart < /button> <
        /div></Link >
        <
        Link to = '/cart' > < div className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
        <
        img src = "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-dress/i/d/c/4-5-years-fkd-xyla-vivana-original-imah3hjsbbf83dvp.jpeg?q=70&crop=false"
        alt = "Front of men&#039;s Basic Tee in black."
        className = "h-full w-full object-cover object-center lg:h-full lg:w-full" / >
        <
        /div> <
        div className = "mt-4 flex justify-between" >
        <
        div >
        <
        h3 className = "text-sm text-gray-700" >
        <
        span ariaHidden = "true"
        className = "absolute inset-0" > < /span>
        Angry Birds Girls Calf Length Festive / Wedding Dress <
        /h3> <
        p className = "mt-1 text-sm text-gray-500" > (Beige, 3 / 4 Sleeve) <
        /p> <
        /div> <
        p className = "text-sm font-medium text-gray-900" > $35 < /p> <
        /div> <
        button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > Add to cart < /button> <
        /div></Link >
        <
        Link to = '/cart' > < div className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
        <
        img src = "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/6/z/d/2-3-years-i-love-papa-white-hoodi-kids-zoon-original-imagpuw4peqpf5q7.jpeg?q=70"
        alt = "Front of men&#039;s Basic Tee in black."
        className = "h-full w-full object-cover object-center lg:h-full lg:w-full" / >
        <
        /div> <
        div className = "mt-4 flex justify-between" >
        <
        div >
        <
        h3 className = "text-sm text-gray-700" >
        <
        span ariaHidden = "true"
        className = "absolute inset-0" > < /span>
        Boys Casual T - shirt <
        /h3> <
        p className = "mt-1 text-sm text-gray-500" > White shirt and pant < /p> <
        p className = "mt-1 text-sm text-gray-500" > Dad 's Special</p> <
        /div> <
        p className = "text-sm font-medium text-gray-900" > $35 < /p> <
        /div> <
        button className = "mt-3 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > Add to cart < /button> <
        /div></Link >
        <
        Link to = '/cart' > < div className = "group relative border-2 border-black rounded-md p-2 hover:bg-gray-200 hover:text-white" >
        <
        div className = "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" >
        <
        img src = "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/d/l/f/18-24-months-mum-com-04-mumbrella-original-imah4fhzryyu6c3m.jpeg?q=70"
        alt = "Front of men&#039;s Basic Tee in black."
        className = "h-full w-full object-cover object-center lg:h-full lg:w-full" / >
        <
        /div> <
        div className = "mt-4 flex justify-between" >
        <
        div >
        <
        h3 className = "text-sm text-gray-700" >
        <
        span ariaHidden = "true"
        className = "absolute inset-0" > < /span>
        Baby Boys Casual T - shirt Shorts <
        /h3> <
        p className = "mt-1 text-sm text-gray-500" > Size 6 - 12 Months, 12 - 18 Months, 18 - 24 Months < /p> <
        /div> <
        p className = "text-sm font-medium text-gray-900" > $35 < /p> <
        /div> <
        button className = "mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > Add to cart < /button> <
        /div></Link > { /* <!-- More products... --> */ } <
        /div> <
        div className = 'flex justify-center p-2 border-black' >
        <
        Link to = '/kidcloth' > < button className = " mt-6 w-[16rem] bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-700" > More Items < /button></Link >
        <
        /div> <
        /div> <
        /div>

        { /* end kids section */ } <
        /div>

    )
}