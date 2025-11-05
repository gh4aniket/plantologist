// src/components/BlogPost.jsx
import React from "react";

const BlogPost = ({ title, content, source, img ,link}) => {
  return (
    <div className="w-80 m-2 p-6 bg-gradient-to-br from-blue-500 to-purple-300 rounded-lg shadow-lg flex flex-col max-h-150">
      <img 
        src={img} 
        alt={title} 
        className="h-48 w-full object-cover rounded-lg mb-4" 
      />
      
      <h5 className="text-lg font-bold text-blue-900 mb-2">{title}</h5>
      
      <p className="text-gray-700 mb-4 line-clamp-3">{content}</p>
      
      <p className="text-sm text-gray-500">
        Source: <a href={source} className="text-purple-600 hover:underline">{source}</a>
      </p>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
      <button type="button" class="bg-white text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-500/30">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.665 1.333 7.332 8.667m7.333-7.334L10 14.666l-2.667-6m7.333-7.333L1.332 6l6 2.667" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Read more...
    </button>
    </a>
    </div>
    </div>
  );
};

export default BlogPost;
