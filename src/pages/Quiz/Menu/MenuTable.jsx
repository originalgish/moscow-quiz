import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Row } from './styles'

const MenuTable = ({ removeTokenFromStorage, getLeaderboard }) => (
  <Table>
    <Row href="/static/rules.pdf" target="_blank" rel="noopener noreferrer">
      Правила
    </Row>
    <Row onClick={getLeaderboard}>Рейтинг</Row>
    <Row href="/static/About_us.pdf" target="_blank" rel="noopener noreferrer">
      О нас
    </Row>
    <Row as={Link} to="/" onClick={removeTokenFromStorage}>
      Выйти
    </Row>
  </Table>
)

export default MenuTable
