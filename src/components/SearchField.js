import React, { useState } from "react";

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
    <div className='max-w-lg rounded overflow-hidden mt-10 mb-20 mr-0'>
      <form onSubmit={handleSubmit} className='w-full max-w-lg'>
        <div className='flex items-center border-b-2 border-teal-500 py-2'>
          <input
            onChange={handleChange}
            value={text}
            type='text'
            placeholder='Search Images..'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
          />
          <button
            type='submit'
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
