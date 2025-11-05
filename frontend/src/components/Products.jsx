import React from 'react';

const HomePrice = ({ title, desc, image,price }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md max-md:max-w-80 font-poppins max-w-120 ml-10">
      <img
        className="w-80 md:w-64 h-80 object-cover object-top"
        src={image}
        alt="product"
      />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-slate-800">{title}</h3>
          <span className="px-3 py-1 bg-red-500 text-white rounded text-sm">SALE</span>
        </div>
        <p className="max-w-xs text-sm mt-2 text-slate-500">{desc}</p>
        <p className="text-xl font-medium text-slate-800 mt-4">{price}</p>
        <div className="flex items-center gap-3 mt-5">
          {['S', 'M', 'L'].map((size) => (
            <label key={size} className="flex flex-col gap-1 items-center cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <span className="w-5 h-5 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2.5 peer-checked:after:h-2.5 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
              <span className="text-gray-700 select-none">{size}</span>
            </label>
          ))}
        </div>
        <button className="px-12 py-2 bg-slate-800 hover:shadow-lg transition-all text-white mt-6 uppercase">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default HomePrice;
