import styled, { keyframes } from 'styled-components'

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`
export const MenuBurger = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  max-width: 60px;
  max-height: 60px;
  border-radius: 10px;
  border: solid 1px #898989;
  padding: 8px;
  outline: none;
`
export const BurgerElement = styled.div`
  background-color: #f0c330;
  width: 100%;
  height: 4px;
  margin-bottom: 5px;
  border-radius: 10px;
  &:nth-child(3) {
    margin-bottom: 0;
  }
`
export const Table = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  border: solid 1px #f0c330;
  border-radius: 10px;
  transform-origin: top left;
  animation: ${zoomIn} 0.3s ease;
`
export const Row = styled.a`
  font-family: Helvetica;
  font-size: 20px;
  line-height: 1.43;
  text-align: center;
  color: #ffffff;
  border-bottom: solid 1px #f0c330;
  display: block;
  padding: 8px 40px;
  max-width: 380px;
  background-color: #0e0e0e;
  text-decoration: none;
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:hover {
    background-color: #2e2e2e;
  }
`
