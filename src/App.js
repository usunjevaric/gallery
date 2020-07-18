import React, { useState, useEffect } from "react";
import { fetchImages } from "./requests.js";

import ImageCard from "./components/ImageCard";
import SearchField from "./components/SearchField";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetchImages(term).then((res) => {
      setImages(res.data.hits);
      setIsLoading(false);
    });
  }, [term]);

  const termHandler = (term) => {
    setTerm(term);
  };

  const loadingSpinner = "Loading...";
  let loadedImages;

  if (!isLoading && images.length === 0) {
    loadedImages = <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>;
  } else {
    loadedImages = (
      <div className='grid grid-cols-3 gap-4'>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    );
  }
  return (
    <div className='container mx-auto'>
      {" "}
      <SearchField setSearchTerm={(term) => termHandler(term)} />
      {isLoading ? loadingSpinner : loadedImages}
    </div>
  );
}

export default App;
