import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { Duration } from 'luxon'

import { getCode } from '../../../actions/user'

import RenderTextField from '../../../components/RenderTextField'
import RenderButton from '../../../components/RenderButton'
// import RenderTooltip from '../../../components/RenderTooltip'
// import TooltipTitle from './components/TooltipTitle'
import RenderSnackbar from '../../../components/RenderSnackbar'

import { phoneMask } from '../helpers/inputMask'
import { onlyFourNumbers } from '../helpers/normalize'

import submit from './utils/submit'
import validate from './utils/validate'

import { FullScreenCenter } from '../../../styles/app/app'
import { ConfirmPhoneForm, Title, ConfirmPhoneContainer, FormTitle, LoginCall, StyledLink } from './styles'

class ConfirmPhone extends Component {
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
    this.props.getCode(this.props.formValues)
  }

  getFormattedSeconds = seconds => Duration.fromObject({ seconds }).toFormat('mm:ss')

  render() {
    const { handleSubmit, valid, submitting, getCodeStage, submitCodeStage, getErrorText, submitErrorText } = this.props
    const { getCodeTime } = this.state
    return (
      <FullScreenCenter>
        <ConfirmPhoneContainer>
          <Title>Московский закупочный квест</Title>
          <ConfirmPhoneForm onSubmit={handleSubmit}>
            <FormTitle>{getCodeStage ? 'Введите номер телефона' : 'Подтвердите номер телефона'}</FormTitle>

            <Field name="phone" component={RenderTextField} label="Телефон" type="tel" {...phoneMask} />
            {submitErrorText && (
              <RenderButton
                type="button"
                disabled={getCodeTime !== 0}
                text={`Получить код ${getCodeTime !== 0 ? `через ${this.getFormattedSeconds(getCodeTime)}` : ``}`}
                color="secondary"
                onClick={this.getCodeAgain}
              />
            )}

            {submitCodeStage && (
              <Field
                name="confirmationCode"
                component={RenderTextField}
                label="Код подтверждения"
                type="number"
                normalize={onlyFourNumbers}
              />
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

            {getErrorText && <RenderSnackbar variant="error" message={getErrorText} />}
            {submitErrorText && <RenderSnackbar variant="error" message={submitErrorText} />}
          </ConfirmPhoneForm>
        </ConfirmPhoneContainer>
      </FullScreenCenter>
    )
  }
}

ConfirmPhone = reduxForm({
  form: 'ConfirmPhone',
  onSubmit: submit,
  validate,
  destroyOnUnmount: false
})(ConfirmPhone)

const mapStateToProps = state => ({
  getErrorText: state.user.getErrorText,
  submitErrorText: state.user.submitErrorText,
  formValues: getFormValues('ConfirmPhone')(state)
})

const mapDispatchToProps = {
  getCode
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmPhone)
