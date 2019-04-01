import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { Duration } from 'luxon'

import { getEmailCode, changeRegistrationStage } from '../../../actions/user'

import RenderTextField from '../../../components/RenderTextField'
import RenderButton from '../../../components/RenderButton'
import RenderSnackbar from '../../../components/RenderSnackbar'

import submit from './utils/submit'
import validate from './utils/validate'

import { FullScreenCenter } from '../../../styles/app/app'
import {
  ConfirmEmailForm,
  Title,
  ConfirmEmailContainer,
  FormTitle,
  LoginCall,
  StyledLink,
  SumbitAnotherEmail
} from './styles'

class ConfirmEmail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      getCodeTime: 0
    }
    this.WAIT_TIME = 120
    this.timer = null
  }

  componentDidUpdate() {
    if (this.state.getCodeTime === 0) {
      clearInterval(this.timer)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  startTimer = () => {
    if (this.props.submitCodeStage && this.state.getCodeTime === 0) {
      this.setState({ getCodeTime: this.WAIT_TIME })
      this.timer = setInterval(() => {
        this.setState({ getCodeTime: this.state.getCodeTime - 1 })
      }, 1000)
    }
  }

  getCodeAgain = () => {
    this.props.getPhoneCode(this.props.formValues)
    this.startTimer()
  }

  getFormattedSeconds = seconds => Duration.fromObject({ seconds }).toFormat('mm:ss')

  backToGetCodeStage = () => {
    this.props.changeRegistrationStage('getEmailCode')
  }

  render() {
    const {
      handleSubmit,
      valid,
      submitting,
      getCodeStage,
      submitCodeStage,
      getEmailErrorText,
      submitEmailErrorText
    } = this.props
    // const { getCodeTime } = this.state
    return (
      <FullScreenCenter withImage>
        <ConfirmEmailContainer>
          <Title>Московский закупочный квест</Title>
          <ConfirmEmailForm onSubmit={handleSubmit}>
            <FormTitle>{getCodeStage ? 'Введите E-mail' : 'Подтвердите E-mail'}</FormTitle>

            <Field name="email" component={RenderTextField} label="E-mail" type="email" disabled={submitCodeStage} />
            {submitCodeStage && (
              <SumbitAnotherEmail onClick={this.backToGetCodeStage} type="button">
                Указать другой E-mail
              </SumbitAnotherEmail>
            )}
            {/* {getEmailErrorText && (
              <RenderButton
                type="button"
                disabled={getCodeTime !== 0}
                text={`Получить код ${getCodeTime !== 0 ? `через ${this.getFormattedSeconds(getCodeTime)}` : ``}`}
                color="secondary"
                onClick={this.getCodeAgain}
              />
            )} */}

            {submitCodeStage && (
              <Field name="emailConfirmationCode" component={RenderTextField} label="Код подтверждения" type="text" />
            )}

            <RenderButton
              type="submit"
              disabled={!valid || submitting}
              text={getCodeStage ? 'Получить код' : 'Отправить код'}
              color="primary"
              onClick={this.startTimer}
            />

            <LoginCall>
              Уже зарегистрированы? <StyledLink to="/login">Войти</StyledLink>
            </LoginCall>

            {getEmailErrorText && <RenderSnackbar variant="error" message={getEmailErrorText} />}
            {submitEmailErrorText && <RenderSnackbar variant="error" message={submitEmailErrorText} />}
          </ConfirmEmailForm>
        </ConfirmEmailContainer>
      </FullScreenCenter>
    )
  }
}

ConfirmEmail = reduxForm({
  form: 'ConfirmEmail',
  onSubmit: submit,
  validate,
  destroyOnUnmount: false
})(ConfirmEmail)

const mapStateToProps = state => ({
  getEmailErrorText: state.user.getEmailErrorText,
  submitEmailErrorText: state.user.submitEmailErrorText,
  formValues: getFormValues('ConfirmEmail')(state)
})

const mapDispatchToProps = {
  getEmailCode,
  changeRegistrationStage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmEmail)
