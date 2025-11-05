
// Example React Component

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from "../components/ContentcardSearch";
const Library =()=> {
    const [data, setData] = useState({});
    const [query, setQuery] = useState("");
const [edible, isedible] = useState(false);
const [poisonous, ispoisnous] = useState(0);
const [cycle, iscycle] = useState("");
  
     async function fetchData() {
            try {
                const response = await fetch(`https://perenual.com/api/v2/species-list?key=sk-3dJT68fbafca5513d13098&q=${query}&cycle=${cycle}`);
const data1 = await response.json(); 
        setData(data1);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

    const handleSubmit = (e) => {
    e.preventDefault();
fetchData();
  };

    return (
        <div className='pt-20 '>
            <h1>API Data</h1>
            <h2>refer</h2>
            <p>feswfweffffffffffffee</p>
           <form onSubmit={handleSubmit} 
        className="flex items-center max-w-md mx-auto border pl-4 gap-2 bg-indigo-500 border-gray-300 h-12 rounded-full overflow-hidden mb-8 mt-30"
      >
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="names of species..."
          className="w-full h-full outline-none px-2 text-sm text-gray-700"
        />
<select id="fruit" name="fruit" value={cycle} className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"  onChange={(e) => iscycle(e.target.value)}>
  <option value="" disabled>
          -- Select Cycle --</option>
  <option value="perennial"> perennial</option>
  <option value="annual">annual</option>
  <option value="biennial">biennial</option>
  <option value="biannual">biannual</option>
</select>
        <button 
          type="submit" 
          className="bg-indigo-500 hover:bg-indigo-600 transition-all duration-200 text-white px-4 py-2 rounded-full"
        >
          Search
        </button>
      </form>
           {console.log(data)}
       <div>
        {Object.keys(data).length === 0? (
          <p className="text-gray-500">Nothing found.</p>
        ) : (
          data.data.map((article, index) => (
            <BlogPost 
              key={index}
              title={article.common_name} 
              img={article.default_image.regular_url} 
              content={article.species_epithet} 
              source={article.scientific_name} 
              link={article.url}
            />
          ))
        )}
       </div>
        </div>
    );
}

export default Library;
