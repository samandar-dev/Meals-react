import React from 'react';
import './header.scss'
import Header_Btn from './Header_Btn/Header_Btn'

function Header(props) {
  return (
    <header className="header">
      <div className="header__img"></div>
      <div className="header__inner">
        <div className="header__container">
          <div className="header__content">
            <h1 className="header__title">ReactMeals</h1>
            <div className="header__shop_box">
              <Header_Btn
                shopBtnPri={props.shopBtnPrice}
                openModalFunc={props.openModalFunc}
                animBtn={props.animBtn} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
