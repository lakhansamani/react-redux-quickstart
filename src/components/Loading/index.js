import React from 'react';

function Loading({ isLoading }) {
  if (!isLoading) { return null; }

  return (
    <div className="centered">
      <h1><i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i></h1>
    </div>
  );
}

Loading.propTypes = {
  isLoading: React.PropTypes.bool
};

export {
  Loading
};
