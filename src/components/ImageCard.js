import React, { useState } from "react";
import Modal from "./Modal";
import { FiDownload } from "react-icons/fi";
const ImageCard = ({
  image: {
    id,
    webformatURL,
    tags,
    views,
    downloads,
    favorites,
    likes,
    comments,
    user,
    largeImageURL,
    userImageURL,
  },
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const modalCloseHandler = () => {
    setShowModal(false);
  };
  const modalOpenHandler = () => {
    // setShowModal(true);
  };
  const downloadImageHandler = (e) => {
    e.preventDefault();
    let anchor;
    if (e.target.parentElement.nodeName === "svg") {
      anchor = e.target.parentElement.parentElement;
    } else {
      anchor = e.target.parentElement;
    }

    fetch(anchor.href, {
      method: "GET",
      headers: {},
    })
      .then((res) => {
        res.arrayBuffer().then((buf) => {
          const url = window.URL.createObjectURL(new Blob([buf]));
          console.log(url);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `usunjevaric_imageGallery_${id}.jpg`);
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => console.log(err));
    console.log(anchor.href);
  };
  return (
    <div className='max-w-full rounded overflow-hidden shadow-lg relative image-container'>
      {showModal && <Modal closeModal={modalCloseHandler} imageUrl={webformatURL} />}

      <img onClick={modalOpenHandler} src={webformatURL} alt='' className='w-full cursor-pointer' />

      <div className='image-data absolute flex items-center content-center justify-between px-4'>
        <div>
          <img src={userImageURL} alt='' className='h-8 w-8 rounded-full mr-3 inline-block' />
          <span className='font-sans text-gray-200'>{user}</span>
        </div>
        <div>
          <a
            className='text-gray-200 flex-row'
            href={largeImageURL}
            download
            onClick={(e) => downloadImageHandler(e)}>
            <FiDownload size={20} className='text-gray-200' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
