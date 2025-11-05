import React,{useState} from "react";
import HomePrice from "../components/Products";
import { productsData } from "../data/Products";
const Countdown=()=>{
const cardData = [
    {
        title: "Organic Fertilizers",
        image: "https://media.sciencephoto.com/image/e7780032/800wm",
    },
    {
        title: "Advanced Irrigation Systems",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwBTnj_94rdrrnV1epq2dujJ_gZFok1utNg&s",
    },
    {
        title: "High-Quality Seeds",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkRZf17-5Iy3D5qIA6u-OG9ylz14R21y3hw&s",
    },
    {
        title: "Pest Control Solutions",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOYV1UMe8bNg4sP2fZOS4DAQb9WHvtHrr6A&s",
    },
];


       const [stopScroll, setStopScroll] = React.useState(false);
   
    return (
        <div>
            <div class="w-full py-2.5 font-medium text-sm text-white bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mt-20">
    <div class="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
        <p>🚚 Free Shipping on Orders Above $50</p>
        <span class="hidden sm:inline">|</span>
        <p>🎁 20% OFF on First Purchase</p>
        <span class="hidden sm:inline">|</span>
        <p>🔐 Use Code: <strong>WELCOME10</strong></p>
    </div>
</div>
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-full relative max-w-6xl mx-auto mt-10" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </> 
<div className="flex  flex-wrap justify-center items-center  gap-4 p-4"> 
   { productsData.map((prod,idx)=>
    (
<HomePrice title={prod.title} desc={prod.desc} image={prod.image} price={prod.price}/>
    ))}
</div>
</div>
)
}
export default Countdown;