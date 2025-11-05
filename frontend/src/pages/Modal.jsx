import React from "react";
import Info from "../components/DiseaseBasicinfo";
import About from "../components/Aboutdisease";
import Cause from "../components/Cause&SSymptoms";
import Medicine from "../components/Medicines";
import Treatment from "../components/Treatmenet";
const Modal= (props)=>
{
return(
    <div className="w-full">
<section class="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mb-10">
    <div class="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
        <img class="max-w-md w-full object-cover rounded-2xl"
            src={props.image}
            alt=""></img>
        
    </div>
   <Info Name={props.obj.diseaseName} Sname={props.obj.scientificName} plant={props.obj.affectedPlants}/>
   <About title="About The Disease" about={props.obj.about}/>
</section>
   <Cause cause={props.obj.cause} symptoms={props.obj.symptoms}/>
   <section class="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mb-10 mt-10">
    <About title="Spreadspeed" about={props.obj.spreadSpeed}/>
    <About title="Preventive Measures"  about={props.obj.prevention}/>
   </section>
   <section class="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mb-10">
   <Treatment title="Treatment" about={props.obj.treatment}/>
</section>
<section class="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mb-10 max-w-[100%]">
   <Medicine title="Medicines" about={props.obj.medicines}/>
</section>
</div>
)
}
export default Modal;