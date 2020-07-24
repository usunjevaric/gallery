import React, { useState, useEffect } from "react";
import useDidUpdateEffect from "./hooks/useDidUpdateEffect";

import InfiniteScroll from "react-infinite-scroll-component";

import { fetchImages, fetchImageById } from "./requests.js";

import HeroImage from "./components/HeroImage";
import SearchField from "./components/SearchField";
import ImageList from "./components/ImageList";

// let pageNum = 1;
function App() {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [term, setTerm] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [heroImage, setHeroImage] = useState({});
  useEffect(() => {
    fetchImageById("5413412")
      .then((res) => setHeroImage(res.hits[0]))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    loadNextImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, term]);

  //custom hook for simulate componentDidUpdate, no need to fire on render, just if term change
  useDidUpdateEffect(() => {
    console.log("update term");
    setIsLoading(true);
    setImages([]);
    setPageNum(1);
  }, [term]);

  const loadNextImages = () => {
    setIsLoading(true);
    fetchImages(pageNum, term)
      .then((res) => {
        setImages((imgs) => [...imgs, ...res.hits]);
        setTotalPages(res.totalHits / res.hits.length);
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log("err");
      });
  };

  const termHandler = (term) => {
    setTerm(term);
  };

  const loadMoreHandler = () => {
    setPageNum((s) => s + 1);
  };

  const loadingSpinner = <h1 className='text-xs'>Loading...</h1>;

  return (
    <div className='mx-auto'>
      {heroImage && (
        <HeroImage heroImage={heroImage} setSearchTerm={(term) => termHandler(term)}>
          {" "}
          {/*<SearchField setSearchTerm={(term) => termHandler(term)} />*/}
        </HeroImage>
      )}

      <InfiniteScroll
        dataLength={images.length}
        scrollThreshold={0.9}
        next={() => setPageNum((s) => s + 1)}
        loader={loadingSpinner}
        hasMore={pageNum < totalPages ? true : false}>
        <ImageList images={images} />
      </InfiniteScroll>
      {!isLoading && (
        <button
          onClick={() => {
            setIsLoading(false);
            loadMoreHandler();
          }}>
          Load More
        </button>
      )}
    </div>
  );
}

export default App;

// if (!isLoading && images.length === 0) {
//   loadedImages = <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>;
// } else {
//   loadedImages = (
//     <div className='grid grid-cols-3 gap-4'>
//       {images.map((image) => (
//         <ImageCard key={image.id} image={image} />
//       ))}
//     </div>
//   );
// }
