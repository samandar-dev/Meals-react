import React from 'react';

function ModOpenRemov(props) {
  return (
    <>
      <button className='modal__total-btn' onClick={props.RemOpen}>Close</button>
      <button className='modal__total-btn order'>Order</button>
    </>
  );
}

export default ModOpenRemov;
