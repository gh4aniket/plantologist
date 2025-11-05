// src/pages/News.jsx
import React, { useState, useEffect } from "react";
import BlogPost from "../components/ContentcardSearch";

const News = () => {
  const [query, setQuery] = useState("");
  const [newsData, setNewsData] = useState([]);

  const fetchNews = async (searchTerm = "indian agriculture policies") => {
    const apiKey = "yourapikey"; // Replace with your API key
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNewsData(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNews(query);
  };

  return (
    <div className="min-h-screen px-4 py-10">
      {/* Search Form */}
      <form 
        onSubmit={handleSubmit} 
        className="flex items-center max-w-md mx-auto border pl-4 gap-2 bg-white border-gray-300 h-12 rounded-full overflow-hidden mb-8 mt-30"
      >
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search news..."
          className="w-full h-full outline-none px-2 text-sm text-gray-700"
        />
        <button 
          type="submit" 
          className="bg-indigo-500 hover:bg-indigo-600 transition-all duration-200 text-white px-4 py-2 rounded-full"
        >
          Search
        </button>
      </form>

      {/* News Cards */}
      <div className="flex flex-wrap justify-center items-start">
        {newsData.length === 0 ? (
          <p className="text-gray-500">No news found.</p>
        ) : (
          newsData.map((article, index) => (
            <BlogPost 
              key={index}
              title={article.title} 
              img={article.urlToImage} 
              content={article.content} 
              source={article.source.name} 
              link={article.url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default News;
