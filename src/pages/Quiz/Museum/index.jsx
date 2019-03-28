import React, { Component } from 'react'

import SVGElements from './SVGElements'

import museum from './img/museum.png'
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
    const points = svgCircles.map(point => {
      const bounds = point.getBoundingClientRect()
      return {
        id: Number(point.id.replace(/\D/g, '')),
        top: bounds.top + bounds.height / 2,
        left: bounds.left + bounds.width / 2
      }
    })
    this.setState({ points })
  }

  render() {
    const { points } = this.state
    return (
      <MuseumContainer>
        <SVGElements className="museum__points" />

        <QuestionContainer>
          {points.map(point => (
            <QuestionMarkButton key={point.id} top={point.top} left={point.left} />
          ))}
        </QuestionContainer>

        <MuseumImage src={museum} alt="museum" />
      </MuseumContainer>
    )
  }
}

export default Museum
