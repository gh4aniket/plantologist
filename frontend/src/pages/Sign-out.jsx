import React from "react";
import { SignUp } from "@clerk/clerk-react";
 const Signup=()=>{
    return(
 <div className="flex justify-center items-center h-screen" >
            <SignUp routing="path" path="/sign-in" />
          </div>
    );
 }
 export default Signup;