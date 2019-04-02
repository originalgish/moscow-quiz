import styled from 'styled-components'

import goal from './img/goal.svg'
import clock from './img/clock.svg'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e0e0e;
  overflow-y: hidden;
  @media screen and (max-width: 600px), screen and (max-height: 700px) {
    align-items: flex-start;
  }
`
export const Modal = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  height: 80%;
  border: solid 1px #d2992a;
  border-radius: 10px;
  background-color: #0e0e0e;
  overflow: hidden;
  padding: 3.5em 40px 0 40px;
  display: flex;
  flex-direction: column;
  @media screen and (max-height: 600px), screen and (max-width: 600px) {
    height: calc(100% - 3.5em);
    padding: 3.5em 0 0 0;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d2992a;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px 20px 10px 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 60px);
  z-index: 1;
  @media screen and (max-width: 600px) {
    border-radius: 0;
  }
`
export const Title = styled.h1`
  margin: 0;
  font-family: Helvetica;
  font-size: 1.5em;
  text-align: left;
  color: #0e0e0e;
`
export const CloseButton = styled.button`
  -webkit-appearance: none;
  border: none;
  background-color: transparent;
  width: 44px;
  height: 44px;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 2px;
    background-color: #0e0e0e;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
export const Info = styled.div`
  margin-top: 20px;
`
export const InfoText = styled.span`
  display: block;
  font-family: Helvetica;
  font-size: 1.5em;
  line-height: 1.42;
  text-align: center;
  color: #ffffff;
`
export const Results = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  width: 100%;
  justify-content: space-around;
  margin-top: 30px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const ResultText = styled.span`
  display: block;
  font-family: Helvetica;
  font-size: 3.5em;
  line-height: 0.67;
  text-align: left;
  color: #ffffff;
  margin: 15px 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -70px;
    transform: translate(0, -50%);
    width: 55px;
    height: 55px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 600px) {
    /* margin: 20px 60px; */
  }
`
export const Time = styled(ResultText)`
  &::before {
    background-image: url(${clock});
  }
`
export const Percent = styled(ResultText)`
  &::before {
    background-image: url(${goal});
  }
`
export const Table = styled.table`
  display: block;
  margin-top: 40px;
  margin-bottom: 5px;
  height: 100%;
  overflow: auto;
  border-collapse: collapse;
`
export const TableBody = styled.tbody``
export const Row = styled.tr``
export const Cell = styled.td`
  font-family: Helvetica;
  font-size: 1.5em;
  line-height: 1.43;
  text-align: center;
  color: ${props => (props.header ? '#d2992a' : '#ffffff')};
  border: solid 1px #707070;
  width: 20%;
  &:first-child {
    width: 10%;
  }
`
