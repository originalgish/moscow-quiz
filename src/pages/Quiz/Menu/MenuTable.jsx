import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Row } from './styles'

const MenuTable = ({ removeTokenFromStorage, getLeaderboard }) => (
  <Table>
    <Row>Правила</Row>
    <Row onClick={getLeaderboard}>Рейтинг</Row>
    <Row>О нас</Row>
    <Row as={Link} to="/" onClick={removeTokenFromStorage}>
      Выйти
    </Row>
  </Table>
)

export default MenuTable
