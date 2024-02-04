import { ImageGalleryList, Modal } from 'components';
import PT from 'prop-types';
import React, { useState } from 'react';

import { ImageLarge } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setlargeImageURL] = useState('');
  const [tags, setTags] = useState('');

  const toggleModal = (largeImageURL, tags) => {
    setShowModal(!showModal);
    setlargeImageURL(largeImageURL);
    setTags(tags);
  };

  return (
    <>
      <ImageGalleryList images={images} toggleModal={toggleModal} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageLarge src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};
ImageGallery.propTypes = {
  images: PT.array.isRequired,
  largeImg: PT.string,
  tags: PT.string,
};

export default ImageGallery;
