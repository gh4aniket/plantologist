import React,{useRef,useState} from 'react';
import './Predict.css';
import { featuresDatapredict} from '../data/featuresDatapredict';
import DiseaseInfo from './Disease';
import Percentage from './Percentage';
import Modal from './Modal';
import CircularProgress from '../components/Percentage';
const Predict = () => {
    const inputRef = useRef(null);
  const [image, setImage] = useState(null);
   const [imagepath, setImagepath] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleButtonClick = () => {
        // Trigger the input click
        inputRef.current.click();
    };

    const handleInputChange = (event) => {
       setImage (event.target.files[0]);
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagepath(imageUrl);
            console.log(imageUrl);
        }
    };

        const handlepredict = async () => {
        if (!image) return;

        const formData = new FormData();
        formData.append('image', image);

        setLoading(true);
        setError('');
        setResult(null);

        try {
 const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
    });
   const res= await response.json();
        setResult(res);
        console.log(result);
        } catch (err) {
            setError('Prediction failed.');
        } finally {
            setLoading(false);
        }
    };
    return (
 <div className="flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover">
    <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-sm mt-24">
        <p>Explore how we help grow brands.</p>
        <a href="#" className="flex items-center gap-1 font-medium">
            Read more
            <svg className="mt-0.5" width="19" height="19" viewBox="0 0 19 19" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M3.959 9.5h11.083m0 0L9.501 3.96m5.541 5.54-5.541 5.542" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
    </div>

    <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-3xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Predict Plant Diseases with AI Accuracy
    </h1>
    <p className="text-slate-300 md:text-base line-clamp-3 max-md:px-2 text-center max-w-2xl mt-3">
Your plant’s health in 3 steps — upload an image, get an AI-powered prediction, and learn how to treat it.
    </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6">
                {featuresDatapredict.map((feature, index) => (
                    <div key={index} className={`hover:-translate-y-0.5 transition duration-300 ${index === 1 ? 'p-px rounded-[13px] bg-gradient-to-br from-[#9544FF] to-[#223B60]' : ''} `}>
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full min-w-80 min-h-35">
                          <feature.icon key={index} className={`pt-100px`}/>
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div class="relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper mt-10 pt-1 pb-1 mb-10">
                  <input
                ref={inputRef}
                type="file"
                onChange={handleInputChange}
                className="hidden"
            />
    <button class="relative z-10 bg-gray-800 text-white rounded-full px-8 py-3 font-medium text-sm " onClick={handleButtonClick}>Upload Image</button>
</div>
{
    image &&(<div class=" p-4 bg-black rounded-lg shadow max-w-150 p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover mb-5 ">
      <h1 class="text-gray-900 text-xl font-semibold uppercase">Image Preview</h1>
     <div className='flex justify-center items-center gap-25'>
       <p class="text-purple-900 text-sm font-bold ">Name: {image.name}</p>
    <p class="text-purple-700 text-sm font-bold">Size: {image.size} bytes    </p>
    <p class="text-purple-900 font-bold text-sm ">Type: {image.type}</p>
   </div>
    <img class="rounded-md" src={imagepath} alt=""></img>
</div>)}
<div class="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 mb-3">
    <button class="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur " onClick={handlepredict}>
        PREDICT
    </button>
</div>
  {error && <div style={{color: 'red'}}>{error}</div>}
            {result && (<div>
               <div class="flex items-center space-x-2.5 border border-violet-500/30 rounded-full bg-violet-500/20 p-1 text-sm text-violet-600">
    <div class="flex items-center space-x-1 bg-violet-500 text-white border border-violet-500 rounded-3xl px-3 py-1">
        <p>PREDICTION RESULT:</p>
    </div>
    <p class="pr-3">{result.prediction}</p>
    <CircularProgress value={result.confidence}/>
</div>
         <DiseaseInfo diseasename={result.prediction} image={imagepath}/>
       </div> )}

</div>
    );
};

export default Predict;