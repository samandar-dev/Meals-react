import React, { Component } from 'react'
import Header from './Header/Header';
import Delicious from './Main/Delicious/Delicious';
import List from './Main/List/List';
import Modal from './Main/List/Modal/Modal'

class Meals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      obj: [
        {
          id: 1,
          name: 'Sushi',
          price: 22.99,
          tit: 'Finest fish and veggies',
          count: 0,
        },
        {
          id: 2,
          name: 'Schnitzel',
          price: 16.50,
          tit: 'A german specialty!',
          count: 0,
        },
        {
          id: 3,
          name: 'Barbecue Burger',
          price: 12.99,
          tit: 'American, raw, meaty',
          count: 0,
        },
        {
          id: 4,
          name: 'Green Bowl',
          price: 18.99,
          tit: 'Healthy...and green...',
          count: 0,
        }
      ],
      modalObj: [],
      filtModalObj: [],
      modalClass: false,
      totalPrice: 0.00,
      itemCount: 0,
      shopBtn: 0,
      animBtn: false,
    }
  }

  removModal = () => {
    this.setState({ modalClass: false })
  }

  openvModal = () => {
    this.setState({ modalClass: true })
  }

  shopBtnCountHandler = (e) => {
    let num = Math.floor(e.target.id)
    this.setState({ shopBtn: this.state.shopBtn + 1 })
    this.setState({ animBtn: true })
    this.state.obj.map((el, i) => {
      if (num === i + 1) {
        this.state.filtModalObj.push(el)
        this.state.modalObj = this.state.filtModalObj.filter((elem, inex, obj) => obj.indexOf(elem) === inex);
        this.state.modalObj.map((pr, i) => {
          this.setState({ totalPrice: this.state.totalPrice + pr.price })
        })
        this.setState(this.state.modalObj.map((ob, inx) => {
          if (num == inx + 1) {
            ob.count += 1
          }
        }))
      }
    })
    setTimeout(() => (
      this.setState({ animBtn: false })
    ), 300)
  }

  addBtnFun = (e) => {
    this.setState(this.state.modalObj.map((ob, inxx) => {
      if (e.target.id == inxx + 1) {
        ob.count += 1
        this.state.obj.map((elem, inx) => {
          if (e.target.id == inx + 1) {
            let price = elem.price
            this.setState({ totalPrice: this.state.totalPrice + price })
          }
        })
      }
    }))
  }

  remBtnFun = (e) => {
    this.state.obj.map((elem, inx) => {
      if (e.target.id == inx + 1) {
        let price = elem.price
        this.setState(this.state.modalObj.map((ob, inxx) => {
          if (e.target.id == inxx + 1) {
            if (ob.count > 0) {
              this.setState({ totalPrice: this.state.totalPrice - price })
              ob.count -= 1
            }
            if (ob.count == 0) {
              this.state.modalObj.splice(e, 1)
            }
          }
        }))
      }
    })
  }

  render() {
    return (
      <>
        <section className='meals'>
          <Header
            shopBtnPrice={this.state.shopBtn}
            openModalFunc={this.openvModal}
            animBtn={this.state.animBtn} />
        </section>
        <main className='main'>
          <Delicious />
          <List addItem={this.shopBtnCountHandler} obj={this.state.obj} />
          <Modal
            modOpenRemov={this.state.modalClass}
            removModalFunc={this.removModal}
            modalObj={this.state.modalObj}
            addBtnFun={this.addBtnFun}
            remBtnFun={this.remBtnFun}
            totalPrice={this.state.totalPrice.toFixed(2)} />
        </main>
      </>
    );
  }
}

export default Meals;
