import React from 'react'
import { isMobile } from 'react-device-detect'

import { FullScreenCenter } from '../../styles/app/app'
import { Wrapper, Title, City, InfoWrapper, Info, Navigation, NavLink } from './styles'

const Home = () => (
  <FullScreenCenter mobile={isMobile}>
    <Wrapper>
      <Title>Закупочный квест</Title>
      <City>Москва</City>
      <InfoWrapper>
        <Info>
          Приглашаем вас пройти наш закупочный квест. Вы познакомитесь с особенностями становления закупочной системы,
          узнаете интересные факты, окунетесь в атмосферу прошлых столетий и проверите свои знания.
        </Info>
        <Info>
          Подведение итогов состоится на «встрече закупочной весны» 4 апреля в 18:00 в государственном историческом
          музее. Участники, показавшие лучшие результаты, получат ценные призы.
        </Info>
      </InfoWrapper>
      <Navigation>
        <NavLink to="/registration">Регистрация</NavLink>
        <NavLink to="/quiz">Войти</NavLink>
      </Navigation>
    </Wrapper>
  </FullScreenCenter>
)

export default Home
