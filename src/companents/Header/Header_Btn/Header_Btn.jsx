import React from 'react';

function HeaderBtn(props) {
  return (
    <>
      <button className="header__shop_btn" onClick={props.openModalFunc} style={{
        animation: props.animBtn ? 'animBTN 0.25s 1' : 'aaa'
      }}><span className='shop__btn-icon'><i className="bx bxs-cart-alt" /></span>Your Cart<span className='shop__btn_num'>{props.shopBtnPri}</span></button>
    </>
  );
}

export default HeaderBtn;
