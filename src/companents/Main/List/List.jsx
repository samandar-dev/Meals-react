import React from 'react';
import Item_right_btn from './item_right-btn/Item_right_btn'
import './list.scss'

function List(props) {
  return (
    <div className='menu'>
      <div className="container">
        <ul className='menu__list'>
          {props.obj.map((el, i) => (
            <li className='menu__item' key={i + 1}>
              <div className="menu__item_left item-left">
                <h3 className="item-left__title">{el.name}</h3>
                <p className='item_left__tit'>{el.tit}</p>
                <p className='item_left__price'>${el.price}</p>
              </div>
              <Item_right_btn clickItem={props.addItem} z id={i + 1} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
