import React from "react";
const Cause= (props)=>
{
    return(
        <section class="flex flex-col items-center justify-center gap-10  min-w-full">
 <div  className={`hover:-translate-y-0.5 transition duration-300 'p-px rounded-[13px] bg-gradient-to-br from-[#9544FF] to-[#223B60]' min-w-[50%]`}>
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950  w-full min-w-300 min-h-10 ">
                            <h3 className="text-base font-medium text-blue-400">
                                Cause
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4">
                                {props.cause}
                            </p>
                        </div>
                    </div>
    <div className={`hover:-translate-y-0.5 transition duration-300 'p-px rounded-[13px] bg-gradient-to-br from-[#9544FF] to-[#223B60]' min-w-[50%] `}>
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full min-w-300 min-h-10">
                            <h3 className="text-base font-medium text-blue-400">
                                Symptoms
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4">
                                {props.symptoms}
                            </p>
                        </div>
                    </div>
                    </section>                 
    )
}
export default Cause;