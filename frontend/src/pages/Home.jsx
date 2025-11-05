import { VideoIcon } from "lucide-react";
import Marquee from "react-fast-marquee";
import { companiesLogo } from "../data/companiesLogo";
import { featuresData } from "../data/featuresData";
import SectionTitle from "../components/SectionTitle";
import { useThemeContext } from "../context/ThemeContext";
import { FaqSection } from "../sections/FaqSection";
import Pricing from "../sections/Pricing";
import Hero from "../components/hero";

export default function Page() {
    const { theme } = useThemeContext();
    return (
        <>
        
            <div className="flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
              <Hero/>
                <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 mt-46 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
                    <div className="flex items-center -space-x-3">
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                            alt="userImage1" />
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                            alt="userImage2" />
                        <img className="size-7 rounded-full" height={50} width={50}
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" />
                    </div>
                    <p className="text-xs">Join community of 1m+ founders </p>
                </div>
               <div>
    
               </div>
                <p className="text-base dark:text-slate-300 max-w-lg mt-2">
                    Insights, tips, and tools crafted to help you nurture, learn about, and grow healthier plants with confidence.”
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
                        Get started
                    </button>
                    <button className="flex items-center gap-2 border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        <VideoIcon strokeWidth={1} />
                        <span>Watch demo</span>
                    </button>
                </div>
            </div>

            <SectionTitle text1="FEATURES" text2="Built for farmers" text3="Guides, resources, and tools — everything you need to cultivate, care for, and expand your garden." />

            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
                {featuresData.map((feature, index) => (
                    <div key={index} className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 min-w-100 md:max-w-66">
                        <feature.icon className="text-purple-500 size-8 mt-4" strokeWidth={1.3} />
                        <h3 className="text-base font-medium">{feature.title}</h3>
                        <p className="text-slate-400 line-clamp-2">{feature.description}</p>
                    </div>
                ))}
            </div>

            <Pricing />

            <FaqSection />

            <div className="flex flex-col items-center text-center justify-center mt-20">
                <h3 className="text-3xl font-semibold mt-16 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
                    Join thousands of satisfied customers and transform your business today.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-purple-600 hover:bg-purple-700 transition text-white rounded-md px-6 h-11">
                        Start free trial
                    </button>
                    <button className="border border-purple-900 transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        Contact sales
                    </button>
                </div>
            </div>

        </>
    );
}