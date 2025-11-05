import { SparklesIcon } from "lucide-react";
import { useThemeContext } from "../context/ThemeContext";
import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data/pricingData";

export default function Pricing() {
    const { theme } = useThemeContext();
    return (
        <div className="relative md-20">
            <img className="absolute -mt-20 md:-mt-100 md:left-20 pointer-events-none" src={theme === "dark" ? "/assets/color-splash.svg" : "/assets/color-splash-light.svg"} alt="color-splash" width={1000} height={1000} priority fetchPriority="high" />
            <SectionTitle text1="STORE" text2="Our Featured Items" text3="Flexible pricing options designed to meet your needs — whether you're just getting started or scaling up." />
  <div className="font-poppins">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`}
      </style>

      <section className="flex flex-wrap items-center justify-center gap-6">
        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top"
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThJCnBW4NE8UuWNlMqRGXnhm1717KITumZgfw1ZfKsKkh1mIYsafzZRS4_EErxhABK_Xikh_-AJQbL_vgyF88iuHHcMR3mY-enWKrs9H2LtcX56a36Vigl"
            alt="image"
          />
          <p className="text-sm mt-2">Nature's Plus Organic Fertiliser</p>
          <p className="text-xl">₹79.00</p>
        </a>

        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://m.media-amazon.com/images/I/51rAVoey8VL._UF1000,1000_QL80_.jpg"
            alt="image"
          />
          <p className="text-sm mt-2">Premium Red Tomato Seeds High-Yield Variety......</p>
          <p className="text-xl">₹200.00</p>
        </a>

        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxYJ5_NxSjca0oeHL6a9OjqLbzBwKqps-1eETO13H_DLwGApNv0_otO9_V4UfeHZUXDn7AVrO1hT811T7pNgy5ofJkT9eXpE_m8lrJ5Hvgf67kUmAurMFjcA"
            alt="image"
          />
          <p className="text-sm mt-2">FMC Ferterra</p>
          <p className="text-xl">₹400.00</p>
        </a>

        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="data:image/webp;base64,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"
            alt="image"
          />
          <p className="text-sm mt-2">Neptune 16L 12V Knapsack Battery Operated Yellow Garden Sprayer, BS-12</p>
          <p className="text-xl">₹2192.00</p>
        </a>
      </section>
    </div>
        </div>
    );
}