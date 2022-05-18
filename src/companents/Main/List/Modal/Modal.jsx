import './Modal.scss';
import React from 'react';
import Bacdrop from './BacDrop/Bacdrop';
import ModOpenRemov from './ModalOpenRemov/ModOpenRemov';
import ModalPriceBtn from './ModalPriceBtn/ModalPriceBtn'

function Modal(props) {
  return (
    <div className='modal' style={{
      opacity: props.modOpenRemov ? '1' : '0',
      zIndex: props.modOpenRemov ? '60' : '-100',
      transition: 'all 0.4s ease',
    }}>
      <div className="modal__box" style={{
        transition: 'all 0.4s ease',
        top: props.modOpenRemov ? '50%' : '30%',
      }}>
        <ul className='modal__list'>
          {props.modalObj.map((el, i) => (
            <li className="modal__item" key={i + 1}>
              <div className="modal__item_left">
                <h3 className="modal__item_title">{el.name}</h3>
                <div className='modal__item_pc'>
                  <p className="modal__item_price">${el.price}</p>
                  <p className='modal__count'>x {el.count}</p>
                </div>
              </div>
              <ModalPriceBtn id={i + 1} addBtnFun={props.addBtnFun} remBtnFun={props.remBtnFun} />
            </li>
          ))}
        </ul>
        <div className="modal__total">
          <h3 className="modal__total_title">Total Amount</h3>
          <div className="modal__total_right">
            <p className='modal__total_price'>${props.totalPrice}</p>
            <ModOpenRemov RemOpen={props.removModalFunc} />
          </div>
        </div>
      </div>
      <Bacdrop RemOpen={props.removModalFunc} />
    </div>
  );
}

export default Modal;
