import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import { navLinks } from "../data/navLinks";

export default function Footer() {
    const { theme } = useThemeContext();
    return (
        <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full dark:text-slate-50">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 dark:border-slate-700 pb-6">
                <div className="md:max-w-114">
                    <img className="h-9 md:h-9.5 w-auto shrink-0" src="https://media.istockphoto.com/id/1405050567/vector/health-stethoscope-vector-logo-design-stethoscope-with-tree-icon-vector-design.jpg?s=612x612&w=0&k=20&c=8mKYvw9I3mnuMW6V8LA2KHy9DRCuZdWCNy_UBpZZWXE=" alt="Logo" width={140} height={40} priority fetchPriority="high" />
                    <p className="mt-6">
                       All your farming needs in one place.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="hover:text-purple-600 transition">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>contact@plantologist.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                Copyright 2025 © <a href="https://prebuiltui.com">Plantologist</a>. All Right Reserved.
            </p>
        </footer>
    );
};