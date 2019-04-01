import React from 'react'
import { Duration } from 'luxon'

import {
  Wrapper,
  Modal,
  Header,
  Title,
  CloseButton,
  Info,
  InfoText,
  Results,
  Time,
  Percent,
  Table,
  Row,
  Cell,
  TableBody
} from './styles'

const temp = [
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  },
  {
    correct_percent: 62,
    nickname: 'Tolya',
    total_time: 1644
  }
]

const getFormattedSeconds = seconds => Duration.fromObject({ seconds }).toFormat('h:mm:ss')

const Leaderboard = ({ closeLeaderboardModal }) => (
  <Wrapper>
    <Modal>
      <Header>
        <Title>Рейтинг</Title>
        <CloseButton onClick={closeLeaderboardModal} />
      </Header>
      <Info>
        <InfoText>Поздравляем!</InfoText>
        <InfoText>Вы успешно закончили квест.</InfoText>
        <InfoText>Ваш результат:</InfoText>
      </Info>
      <Results>
        <Time>0:15:25</Time>
        <Percent>100%</Percent>
      </Results>
      <Table>
        <TableBody>
          <Row>
            <Cell header>#</Cell>
            <Cell header>Никнейм</Cell>
            <Cell header>Время</Cell>
            <Cell header>Верные ответы</Cell>
          </Row>
          {temp.map((postition, index) => (
            <Row key={index}>
              <Cell>{index + 1}</Cell>
              <Cell>{postition.nickname}</Cell>
              <Cell>{getFormattedSeconds(postition.total_time)}</Cell>
              <Cell>{`${postition.correct_percent}%`}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </Modal>
  </Wrapper>
)

export default Leaderboard
