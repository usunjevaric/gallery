import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageList from "./ImageList";

const InfiniteImagesComponent = ({ images, setPageNum, totalPages, pageNum }) => {
  const loadingSpinner = <h1 className='text-xs'>Loading...</h1>;
  return (
    <InfiniteScroll
      dataLength={images.length}
      scrollThreshold={0.9}
      next={() => setPageNum((s) => s + 1)}
      loader={loadingSpinner}
      hasMore={pageNum < totalPages ? true : false}>
      <ImageList images={images} />
    </InfiniteScroll>
  );
};

export default InfiniteImagesComponent;
