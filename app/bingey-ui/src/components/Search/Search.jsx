import React, { useState, useRef } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import api from 'utils/api';

import { SearchDropdown } from './SearchDropdown/SearchDropdown';

import './searchStyle.scss';

export const Search = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [titles, setTitles] = useState(null);
  const [isQueryInProgress, setIsQueryInProgress] = useState(false);

  const searchRef = useRef(null);

  const handleOpenDropdown = () => {
    setIsOpenDropdown(true);
  };

  const handleCloseDropdown = () => {
    setIsOpenDropdown(false);
  };

  const handleInputChange = async (event) => {
    setIsQueryInProgress(true);

    const result = await api.search(event.target.value);

    setTitles(result);

    setIsQueryInProgress(false);
  };

  return (
    <div className='search'>
      <div className='searchIcon'>
        <SearchIcon />
      </div>
      <InputBase
        id='searchBar'
        placeholder='Search…'
        classes={{
          root: 'inputRoot',
          input: 'inputBase',
        }}
        inputProps={{ 'aria-label': 'search' }}
        autoComplete='off'
        ref={searchRef}
        onChange={(event) => handleInputChange(event)}
        onClick={handleOpenDropdown}
        onBlur={() => setTimeout(handleCloseDropdown, 100)}
      />
      <SearchDropdown
        open={isOpenDropdown}
        titles={titles}
        isQueryInProgress={isQueryInProgress}
        onClose={handleCloseDropdown}
      />
    </div>
  );
};
