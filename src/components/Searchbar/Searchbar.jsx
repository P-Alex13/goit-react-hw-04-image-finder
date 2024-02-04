import PT from 'prop-types';
import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { toast } from 'react-toastify';

import {
  ButtonLabel,
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const onInputChange = e => {
    const inputValue = e.currentTarget.value;
    setName(inputValue.toLowerCase());
  };

  const onFormSubmit = e => {
    e.preventDefault();

    name !== ''
      ? onSubmit(name)
      : toast.error('🥺 Please enter a picture name');

    reset();
  };

  const reset = () => {
    setName('');
  };

  return (
    <Header>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchFormButton type="submit">
          <BiSearchAlt2
            style={{
              width: 30,
              height: 30,
            }}
          />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={name}
          onChange={onInputChange}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PT.func.isRequired,
};

export default Searchbar;
