import styled, { css } from 'styled-components'

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
  max-height: 70%;
  border: solid 1px #d2992a;
  border-radius: 10px;
  background-color: #0e0e0e;
  overflow: hidden;
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    z-index: 2;
  }

  @media screen and (max-height: 600px), screen and (max-width: 600px) {
    height: calc(100% - 5em);
    max-height: 100%;
    border-radius: 0;
  }
  ${props => {
    if (props.hasAnswered && props.hasAnsweredCorrect) {
      return css`
        border-color: #889712;
        &::before {
          background-color: #889712;
        }
      `
    }
    if (props.hasAnswered && !props.hasAnsweredCorrect) {
      return css`
        border-color: #90221b;
        &::before {
          background-color: #90221b;
        }
      `
    }
  }}
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d2992a;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: solid 1px #d2992a;
  padding: 10px 20px 10px 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 60px);
  z-index: 1;
  @media screen and (max-width: 600px) {
    border-radius: 0;
  }
  ${props => {
    if (props.hasAnswered) {
      return css`
        background-color: transparent;
      `
    }
  }}
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
  ${props => {
    if (props.hasAnswered) {
      return css`
        &::before,
        &::after {
          background-color: #d2992a;
        }
      `
    }
  }}
`
export const Main = styled.main`
  padding: 0 40px;
  height: 100%;
  overflow-y: auto;
`
export const Timer = styled.div`
  font-family: Helvetica;
  font-size: 2.5em;
  text-align: right;
  color: #0e0e0e;
  ${props => {
    if (props.hasAnswered && props.hasAnsweredCorrect) {
      return css`
        color: #889712;
      `
    }
    if (props.hasAnswered && !props.hasAnsweredCorrect) {
      return css`
        color: #90221b;
      `
    }
  }}
`

export const Text = styled.p`
  font-family: Helvetica;
  font-size: 1.2em;
  line-height: 1.3;
  text-align: left;
  color: #ffffff;
`
export const Intro = styled(Text)``
export const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Radio = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const Label = styled.label`
  width: 100%;
  display: flex;
  flex: 1;
  &:first-child {
    margin-bottom: 0;
    margin-right: 20px;
  }
  @media screen and (max-width: 600px) {
    &:first-child {
      margin-bottom: 20px;
      margin-right: 0;
    }
    flex: auto;
  }
`
export const AnswerText = styled(Text)`
  text-align: center;
  border-radius: 20px;
  border: solid 1px #ffffff;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: 0.3s ease;
  position: relative;
  margin: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  ${props => {
    switch (props.answerState) {
      case 'neutral':
        return css`
          border-color: #ffffff;
        `
      case 'chosen':
        return css`
          border-color: #d2992a;
        `
      case 'correct':
        return css`
          border-color: #889712;
          &::before {
            background-color: #889712;
          }
        `
      case 'incorrect':
        return css`
          border-color: #90221b;
          &::before {
            background-color: #90221b;
          }
        `

      default:
        return
    }
  }}
  @media screen and (max-width: 600px) {
    padding: 20px;
    margin: 0 !important;
  }
`
export const AnswerButtonContainer = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  width: 50%;
  max-width: 300px;
`
export const Result = styled.span`
  display: block;
  text-align: center;
  font-size: 1em;
  color: #ffffff;
  margin: 1em 0;
`
export const ButtonBack = styled.button`
  -webkit-appearance: none;
  border: none;
  padding: 0;
  background-color: transparent;
  font-family: Helvetica;
  font-size: 1em;
  text-align: left;
  color: #ffffff;
  text-decoration: underline;
`
