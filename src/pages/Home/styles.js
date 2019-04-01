import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 900px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
export const Title = styled.h1`
  margin: 0;
  font-family: Helvetica;
  font-size: 3em;
  letter-spacing: 3px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 0px;
  padding-bottom: 20px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 3px;
    background-color: #ffffff;
    border-radius: 4px;
  }
`
export const City = styled.h2`
  margin: 0;
  font-family: Helvetica;
  font-size: 2.5em;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 20px;
`
export const InfoWrapper = styled.div`
  margin-top: 120px;
`
export const Info = styled.p`
  font-family: Helvetica;
  font-size: 1em;
  line-height: 1.4;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
`
export const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 100px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1em;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  width: 100%;
  max-width: 250px;
  padding: 1em 0;
  border-radius: 20px;
  border: solid 3px #ffffff;
  margin-bottom: 20px;
`
