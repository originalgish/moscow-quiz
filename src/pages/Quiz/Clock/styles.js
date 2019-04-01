import styled from 'styled-components'

import clock from './img/clock.png'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
export const ClockImage = styled.div`
  /* width: 20vw;
  height: 20vh; */
  width: 127px;
  height: 166px;
  background-image: url(${clock});
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 600px), screen and (max-height: 600px) {
    width: 100px;
    height: 130px;
  }
`
export const Time = styled.span`
  display: block;
  font-family: Helvetica;
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
  color: #0e0e0e;
  border-radius: 6px;
  border: solid 2px #000000;
  background-color: #f0c330;
  padding: 4px 6px;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(-40%, -50%);
`
