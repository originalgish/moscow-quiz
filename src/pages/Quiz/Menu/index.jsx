import React, { Component } from 'react'
import enhanceWithClickOutside from 'react-click-outside'

import MenuTable from './MenuTable'

import { MenuBurger, BurgerElement } from './styles'

class Menu extends Component {
  state = {
    menuIsOpen: false
  }

  openMenu = () => {
    this.setState({ menuIsOpen: true })
  }

  closeMenu = () => {
    this.setState({ menuIsOpen: false })
  }

  handleClickOutside = () => {
    this.closeMenu()
  }

  render() {
    const { menuIsOpen } = this.state
    return (
      <MenuBurger onClick={this.openMenu}>
        <BurgerElement />
        <BurgerElement />
        <BurgerElement />
        {menuIsOpen && <MenuTable />}
      </MenuBurger>
    )
  }
}

export default enhanceWithClickOutside(Menu)
