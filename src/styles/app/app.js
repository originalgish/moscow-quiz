import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import './normalize.css'
import './fonts.css'

export const AppStyles = createGlobalStyle`
  body {
    background-color: #212121;
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
`
