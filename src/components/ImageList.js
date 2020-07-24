import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";
import Modal from "./Modal";
const ImageList = ({ images }) => {
  useEffect(() => {}, [images]);
  // const noImages = <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>;

  const breakpointsColumsObj = {
    default: 3,
    1024: 2,
    768: 2,
    640: 1,
  };
  return (
    <div className='mx-auto px-3 w-full'>
      <Masonry
        breakpointCols={breakpointsColumsObj}
        className='masonry-grid mx-auto w-full '
        columnClassName='masonry-grid_column ml-0 sm:ml-3'>
        {images.map((image, idx) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </Masonry>
    </div>
  );
};

export default ImageList;
