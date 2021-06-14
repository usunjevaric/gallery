import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
const SearchField = ({ setSearchTerm }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(text);
  };
  return (
    <div className='w-full px-6 md:px-0 rounded overflow-hidden mt-20 mb-10 sm:mb-20 mx-auto absolute bottom-0'>
      <form onSubmit={handleSubmit} className='w-full max-w-xl mx-auto'>
        <p className='mb-5 text-gray-100 font-bold text-4xl tracking-wide leading-none'>
          The best photos shared by talented creators.
        </p>
        <div className='flex items-center bg-gray-200  rounded-md px-3 py-2'>
          <input
            onChange={handleChange}
            value={text}
            type='text'
            placeholder='Search for photos'
            className='appearance-none bg-gray-200 border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-600'
          />
          <button
            type='submit'
            className='flex-shrink-0 bg-transparent rounded hover:bg-gray-400 border-none hover:border-none text-xl border-4 text-gray-900 py-1 px-2'>
            <FiSearch />
          </button>
        </div>
        <p className='text-gray-100 text-md font-weight-thin font-sans pl-3 mt-2'>
          Sugested: city, work, girl, office, travel
        </p>
      </form>
    </div>
  );
};

export default SearchField;
