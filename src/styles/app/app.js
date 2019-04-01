import { createGlobalStyle } from 'styled-components'
import styled, { css } from 'styled-components'

import castleRight from '../../img/castle-right.png'

import './normalize.css'
import './fonts.css'

export const AppStyles = createGlobalStyle`
  body {
    background-color: #0e0e0e;
    font-family: Helvetica;
    font-size: 16px;
    color: #e0e0e0;
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: #e0e0e0;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
      caret-color: #e0e0e0;
    }
  }
`
export const FullScreenCenter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.mobile &&
    css`
      align-items: flex-start;
      overflow-y: auto;
      padding: 1em 0;
    `};
  ${props =>
    props.withImage &&
    css`
      background-image: url(${castleRight});
      background-position: left bottom;
      background-size: 30%;
      background-repeat: no-repeat;
    `};
`
