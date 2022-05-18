import React from 'react';

function ModalBtn(props) {
  return (
    <div className="modal__item_right">
      <button className='modal__item-btn' id={props.id} onClick={props.remBtnFun}>-</button>
      <button className='modal__item-btn' id={props.id} onClick={props.addBtnFun}>+</button>
    </div>
  );
}

export default ModalBtn;
