import React, { Component } from 'react'

import SVGElements from './SVGElements'

import museum from './img/museum.png'
import './index.scss'

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
      <div className="museum">
        <SVGElements className="museum__points" />

        <div className="museum__questions">
          {points.map(point => (
            <button
              key={point.id}
              className="museum__questions__question"
              style={{
                top: `${point.top}px`,
                left: `${point.left}px`
              }}
            />
          ))}
        </div>

        <img src={museum} alt="museum" className="museum__image" />
      </div>
    )
  }
}

export default Museum
