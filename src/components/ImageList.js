import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  useEffect(() => {}, [images]);
  const noImages = <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>;

  const breakpointsColumsObj = {
    default: 4,
    1200: 3,
    922: 2,
    768: 2,
    576: 1,
  };
  return (
    <div className='mx-auto px-10'>
      <Masonry
        breakpointCols={breakpointsColumsObj}
        className='masonry-grid'
        columnClassName='masonry-grid_column'>
        {images.map((image, idx) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </Masonry>
    </div>
  );
};

export default ImageList;
