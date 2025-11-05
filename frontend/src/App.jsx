import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Predict from "./pages/Predict"
import Chat from "./pages/Chatbot"
import Countdown from "./pages/Store"
import News from "./pages/News"
import Library from "./pages/Library"
import Signin from "./pages/Sign-in"
import Signup from "./pages/Sign-out"
import Profile from "./pages/User"
export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/predict" element={<Predict />} />
               {/* <Route path="/chatbot" element={<Chat/>} />*/}
               <Route path="/store" element={<Countdown/>}/>
               <Route path="/News" element={<News/>}/>
                <Route path="/sign-in/*" element={<Signin/>} />
                 <Route path="/sign-up/*" element={<Signup />} />
               <Route path="/library" element={<Library/>}/>
               <Route path="/profile" element={<Profile/>}/>
            </Routes>
            <Footer />
             
        </>
    )
}