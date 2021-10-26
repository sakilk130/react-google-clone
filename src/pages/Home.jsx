import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import '../styles/Home.css';
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/about">Gmail</Link>
          <Link to="/store">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
}

export default Home;
