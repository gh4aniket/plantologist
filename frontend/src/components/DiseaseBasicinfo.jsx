import React from "react";

const Info=(props)=>
{
return(
 <div class="text-sm text-slate-600 max-w-lg min-w-50">
        <h1 class="text-xl uppercase font-semibold text-blue-600 mb-2">What?</h1>
        <div class="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
        <h3 class="text-lg  font-semibold text-blue-400 mt-4">Disease Name</h3>
        <p class="mb-4">{props.Name} </p>
        <pre>

        </pre>
                <h3 class="text-lg  font-semibold text-blue-400">scientific name</h3>
        <p class="mb-4">{props.Sname}</p>
                <h3 class="text-lg  font-semibold text-blue-400">Affected plants</h3>
       <ul> {props.plant.map((val)=>{
return <li>**{val}**</li>;
        })}
        </ul>
    </div>
)
}

export default Info;