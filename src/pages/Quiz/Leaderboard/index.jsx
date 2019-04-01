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

const getFormattedSeconds = seconds => Duration.fromObject({ seconds }).toFormat('h:mm:ss')

const Leaderboard = ({ leaderboard: { leaderboard, current_player }, closeLeaderboard }) => (
  <Wrapper>
    <Modal>
      <Header>
        <Title>Рейтинг</Title>
        <CloseButton onClick={closeLeaderboard} />
      </Header>
      <Info>
        <InfoText>Поздравляем!</InfoText>
        <InfoText>Вы успешно закончили квест.</InfoText>
        <InfoText>Ваш результат:</InfoText>
      </Info>
      {current_player && (
        <Results>
          <Time>{getFormattedSeconds(current_player.total_time)}</Time>
          <Percent>{`${current_player.correct_percent}%`}</Percent>
        </Results>
      )}
      <Table>
        <TableBody>
          <Row>
            <Cell header>#</Cell>
            <Cell header>Никнейм</Cell>
            <Cell header>Время</Cell>
            <Cell header>Верные ответы</Cell>
          </Row>
          {leaderboard.map((postition, index) => (
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
