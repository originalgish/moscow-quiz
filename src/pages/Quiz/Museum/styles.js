import styled from 'styled-components'
import objectFitImages from 'object-fit-images'

import questionMark from './img/question-mark-sign.svg'

objectFitImages()

export const MuseumContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
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
  width: 3%;
  height: 8%;
  background-image: url(${questionMark});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`
