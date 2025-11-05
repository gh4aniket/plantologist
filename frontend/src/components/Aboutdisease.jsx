import React from "react";
const About= (props)=>
{
     const { about, title } = props;
    const isString = typeof about === "string";
  const isArray = Array.isArray(about);
  const isObject = typeof about === "object" && about !== null && !Array.isArray(about);
    return(
 <div class="text-sm text-slate-600 max-w-lg min-w-150 p-[3px] bg-gradient-to-r from-blue-800 to-peach-700 rounded-lg  min-h-100 ">
    <div className="bg-gradient-to-r border border-slate-800 bg-slate-950 p-4 rounded-md  min-h-100">
        <h1 class="text-xl uppercase font-semibold text-blue-700">{props.title}</h1>
        <div class="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF] min-w-[20%] "></div>
{isString ? (
            <p className="mt-8">{about}</p>
        ) : isArray ? (
          <ul>
            {about.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        ) : (
          <div>No data available</div>
        )}
           </div>
    </div>
    )
}
export default About;