import React, { Component } from 'react'

import SVGElements from './SVGElements'
import Lights from './Lights'

import museum from './img/museum.png'
import { FullScreenCenter } from '../../../styles/app/app'
import { MuseumImage, MuseumContainer, QuestionContainer, QuestionMarkButton } from './styles'

class Museum extends Component {
  state = {
    points: []
  }

  componentDidMount() {
    this.getAllSVGObjects()
    window.addEventListener('resize', this.getAllSVGObjects)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getAllSVGObjects)
  }

  getAllSVGObjects = () => {
    const svg = document.getElementById('Group')
    if (svg) {
      const svgCircles = Array.from(document.getElementsByTagName('circle'))
      this.getPointsCoordinates(svgCircles)
    }
  }

  getPointsCoordinates = svgCircles => {
    const parentBounds = document.getElementById('museum').getBoundingClientRect()
    const points = svgCircles.map(point => {
      const bounds = point.getBoundingClientRect()

      return {
        id: Number(point.id.replace(/\D/g, '')),
        top: bounds.top - parentBounds.top + bounds.height / 2,
        left: bounds.left - parentBounds.left + bounds.width / 2
      }
    })
    this.setState({ points })
  }

  getAnsweredQuestions = () => this.props.answeredPositions.map(position => position.position)

  render() {
    const { points } = this.state
    const { avaliablePositions, getQuestion, answeredPositions } = this.props

    return (
      <FullScreenCenter>
        <MuseumContainer id="museum">
          <SVGElements />

          <Lights answeredPositions={answeredPositions} getAnsweredQuestions={this.getAnsweredQuestions} />
          <MuseumImage src={museum} alt="museum" />

          <QuestionContainer>
            {points.map(point => (
              <QuestionMarkButton
                key={point.id}
                top={point.top}
                left={point.left}
                disabled={!avaliablePositions.includes(point.id)}
                data-id={point.id}
                onClick={getQuestion}
                hidden={this.getAnsweredQuestions().includes(point.id)}
              />
            ))}
          </QuestionContainer>
        </MuseumContainer>
      </FullScreenCenter>
    )
  }
}

export default Museum
