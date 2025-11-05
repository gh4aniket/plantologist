import React, { useState } from 'react';
import { prompt } from '../data/Promtdata';
import Modal from './Modal';
const DiseaseInfo = (props) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    
    const handleSubmit = async () => {
          setLoading(true);

        try {
            const apiKey = "your ggogle api key here"; // ⚠ Don't expose this in real apps!

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: `You are a phytopathologist and an expert in plant diseases. Your task is to provide comprehensive information about ${props.diseasename} ${prompt}` }] }]
                    })
                }
            );

            const data = await response.json();

            const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
            const clean = text.replace(/^```json\s*/, '').replace(/\s*```$/, ''); 
            const parsedData = JSON.parse(clean);
            console.log(parsedData);
            setResult(parsedData);
console.log(typeof(text));
console.log(typeof(parseData));
        } catch (error) {
            console.error("Error:", error);
            setResult("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto mt-4">
           
            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-10"
            >
                {loading ? "Loading..." : "Get Info"}
            </button>

            {result && (
               <Modal obj={result} image={props.image}/>                
            )}
        </div>
    );
};

export default DiseaseInfo;
