import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>Hi~ o(*￣▽￣*)ブ.This is my EAD Final Exam.</p>
      </div>
    </div>
  );
};

export default Banner;
