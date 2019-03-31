import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'

import { FullScreenCenter } from '../../styles/app/app'
import { Wrapper, Title, City, InfoWrapper, Info, Navigation, NavLink } from './styles'

class Home extends Component {
  state = {}
  render() {
    return (
      <FullScreenCenter mobile={isMobile}>
        <Wrapper>
          <Title>Закупочный квест</Title>
          <City>Москва</City>
          <InfoWrapper>
            <Info>
              NEMO ENIM IPSAM VOLUPTATEM, QUIA VOLUPTAS SIT, ASPERNATUR AUT ODIT AUT FUGIT, SED QUIA CONSEQUUNTUR MAGNI
              DOLORES EOS, QUI RATIONE VOLUPTATEM SEQUI NESCIUNT, NEQUE PORRO QUISQUAM EST.
            </Info>
            <Info>QUI DOLOREM EUM FUGIAT, QUO APRIL 4TH 20:00 VOLUPTAS NULLA PARIATUR. </Info>
          </InfoWrapper>
          <Navigation>
            <NavLink to="/quiz">Пройти квест</NavLink>
            <NavLink to="/registration">Регистрация</NavLink>
            <NavLink to="/login">Войти</NavLink>
          </Navigation>
        </Wrapper>
      </FullScreenCenter>
    )
  }
}

export default Home
