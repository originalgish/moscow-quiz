import React, { Component } from 'react'
import enhanceWithClickOutside from 'react-click-outside'

import { keys } from '../../../keys'

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

  removeTokenFromStorage = () => {
    localStorage.removeItem(keys.accessToken)
    this.props.logout()
  }

  getLeaderboard = () => {
    this.props.getLeaderboard()
  }

  render() {
    const { menuIsOpen } = this.state
    return (
      <MenuBurger onClick={this.openMenu}>
        <BurgerElement />
        <BurgerElement />
        <BurgerElement />
        {menuIsOpen && (
          <MenuTable removeTokenFromStorage={this.removeTokenFromStorage} getLeaderboard={this.getLeaderboard} />
        )}
      </MenuBurger>
    )
  }
}

export default enhanceWithClickOutside(Menu)
