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
        {/* <map name="museum" className="map">
          <div className="map__area">
            <area
              alt="question"
              shape="circle"
              coords="150,300,50"
              className="map__area"
              href=""
              onClick={this.handleAreaClick}
            />
            <div className="map_area" />
          </div>
        </map>
        <img useMap="#museum" src={museum} alt="museum" className="museum" /> */}

        {/* <svg className="museum">
          <div cx="150" cy="300" r="50" className="museum__area" />
        </svg> */}

        <div className="museum">
          <div className="museum__area" />

          <img src={museum} alt="museum" className="museum__image" />
        </div>
      </div>
    )
  }
}

export default Quiz
