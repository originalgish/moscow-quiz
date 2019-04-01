import React from 'react'

import { Table, Anchor, RouterLink, Button } from './styles'

const MenuTable = ({ removeTokenFromStorage, getLeaderboard }) => (
  <Table>
    <Anchor href="/static/rules.pdf" target="_blank" rel="noopener noreferrer">
      <span>Правила</span>
    </Anchor>
    <Button onClick={getLeaderboard}>Рейтинг</Button>
    <Anchor href="/static/About_us.pdf" target="_blank" rel="noopener noreferrer">
      О нас
    </Anchor>
    <RouterLink to="/" onClick={removeTokenFromStorage}>
      Выйти
    </RouterLink>
  </Table>
)

export default MenuTable
