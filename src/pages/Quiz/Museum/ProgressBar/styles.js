import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  bottom: -70px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #8c8c8c;
    transform: translateY(-50%);
    z-index: 0;
  }
`
export const ProgressCircle = styled.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  border: solid 1px #8c8c8c;
  border-radius: 50%;
  font-family: Helvetica;
  font-size: 1.2em;
  background-color: #0e0e0e;
  text-align: center;
  color: #8c8c8c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`
