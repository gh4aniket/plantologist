import React from "react";
const Treatment=(props)=>
{
    return(
 <div class="text-sm text-slate-600 min-w-300 p-[3px] bg-gradient-to-r from-blue-800 to-peach-700 rounded-lg ">
    <div className="bg-gradient-to-r border border-slate-800 bg-slate-950 p-4 rounded-md">
        <h1 class="text-xl uppercase font-semibold text-blue-700">{props.title}</h1>
        <div class="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] min-w-[20%] "></div>
              <p>
               {props.about}
              </p>
          </div>
          </div>
    )
}
export default Treatment;