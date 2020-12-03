import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="col text-center">
      <div className="spinner-border mx-auto" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;
