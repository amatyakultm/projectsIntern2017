import React from 'react';
import ReactLoading from 'react-loading';
import '../styles/Style.css';

const Loading = () => {
  return (
    <div className="col align-self-center loading">
      <ReactLoading
        type="spin"
        color="#dc3833"
        className="loading-icon"
        delay={0}
      />
      Loading
    </div>
  );
};

export default Loading;
