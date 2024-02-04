import 'react-toastify/dist/ReactToastify.css';

import { ImageInfo, Searchbar } from 'components';
import { AppStyled } from 'components/App.styled';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(0);

  const handleSubmit = newName => {
    if (newName !== name) {
      setName(newName);
      setPage(1);
    }
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppStyled>
      <Searchbar onSubmit={handleSubmit} />
      <ImageInfo name={name} page={page} loadMore={handleLoadMoreClick} />
      <ToastContainer autoClose={2000} />
    </AppStyled>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
