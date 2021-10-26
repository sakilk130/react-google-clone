import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

import '../styles/Search.css';
import { Button } from '@material-ui/core';
function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input type="text" />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;
