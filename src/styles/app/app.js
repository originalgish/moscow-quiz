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
