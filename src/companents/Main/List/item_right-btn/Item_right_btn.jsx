import React from 'react';

function ItemRightBtn(props) {
  return (
    <div className="menu__item_right item-right">
      <div className="item-right__inp">
        <p className='item__right__tit'>Amount</p>
        <input className='item__right_inp' onChange={props.clickItem} type="number" placeholder='1' />
      </div>
      <button className='item__right_btn' id={props.id} onClick={props.clickItem} >+ Add</button>
    </div>
  );
}

export default ItemRightBtn;
