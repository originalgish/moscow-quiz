import styled from 'styled-components'

import questionMark from './img/question-mark.svg'
import museum from './img/museum.png'

export const MuseumContainer = styled.div`
  position: relative;
  width: 70%;
  height: 70%;

  /* background-image: url(${museum});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
  /* background-color: #ff000050; */
`
export const MuseumImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  font-family: 'object-fit: contain;';
`
export const SVGContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const QuestionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const QuestionMarkButton = styled.button`
  background-color: transparent;
  -webkit-appearance: none;
  border: none;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  transform: translate(-50%, -50%);
  width: 4%;
  height: 6%;
  max-width: 30px;
  max-height: 25px;
  background-image: url(${questionMark});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
