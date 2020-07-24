import React from "react";
import SearchField from "./SearchField";
const HeroImage = (props) => {
  return (
    <div className='hero mb-20 relative'>
      <img
        className='w-screen h-full object-cover absolute'
        src={props.heroImage.largeImageURL}
        alt=''
      />
      <SearchField setSearchTerm={(term) => props.setSearchTerm(term)} />
    </div>
  );
};

export default HeroImage;
