import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LoginForm = styled.form`
  width: 100%;
  max-width: 450px;
  margin: 0 25px;
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`
export const LoginContainer = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    display: block;
  }
`
const Text = styled.span`
  display: block;
  font-family: Helvetica;
  font-size: 1em;
  font-weight: 400;
  color: #ffffff;
`
export const Title = styled.h1`
  margin: 0;
  font-size: 2em;
  text-align: right;
  padding-right: 25px;
  border-right: 2px solid #dbdbdb;
  max-width: 300px;
  @media screen and (max-width: 600px) {
    border: none;
    text-align: left;
    margin-bottom: 1em;
  }
  ${Text}
`
export const RegisterCall = styled(Text)`
  line-height: 1.3;
  margin-bottom: 1.5em;
`
export const StyledLink = styled(Link)`
  color: #ffffff;
  ${Text}
`
export const ForgotPassword = styled(Text)`
  margin-top: 1em;
`
