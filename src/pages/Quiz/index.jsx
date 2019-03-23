import React, { Component } from 'react'

import museum from './img/museum.png'
import './index.scss'

class Quiz extends Component {
  state = {}

  handleAreaClick = e => {
    e.preventDefault()
    console.log('area')
  }

  render() {
    return (
      <div className="quiz">
        <map name="museum" className="map">
          <area
            alt="question"
            shape="circle"
            coords="150,300,50"
            className="map__area"
            href=""
            onClick={this.handleAreaClick}
          />
        </map>
        <img useMap="#museum" src={museum} alt="museum" className="museum" />

        {/* <svg className="museum">
          <div cx="150" cy="300" r="50" className="museum__area" />
        </svg> */}
      </div>
    )
  }
}

export default Quiz
