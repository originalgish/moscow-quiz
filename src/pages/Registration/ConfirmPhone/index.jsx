import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { Duration } from 'luxon'

import { getCode } from '../../../actions/user'

import RenderTextField from '../../../components/RenderTextField'
import RenderButton from '../../../components/RenderButton'
import RenderTooltip from '../../../components/RenderTooltip'
import RenderSnackbar from '../../../components/RenderSnackbar'
import TooltipTitle from './components/TooltipTitle'

import { phoneMask } from '../helpers/inputMask'
import { onlyFiveNumbers } from '../helpers/normalize'

import submit from './utils/submit'
import validate from './utils/validate'

import './index.scss'

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
    const { handleSubmit, valid, submitting, getCodeStage, submitCodeStage, getCodeError, submitCodeError } = this.props
    const { getCodeTime } = this.state
    return (
      <div className="fullscreen-center">
        <form onSubmit={handleSubmit} className="confirm-phone-form">
          <h1>{getCodeStage ? 'Введите номер телефона' : 'Подтвердите номер телефона'}</h1>

          <Field name="phone" component={RenderTextField} label="Телефон" type="tel" {...phoneMask} />

          {submitCodeError && (
            <RenderButton
              type="button"
              disabled={getCodeTime !== 0}
              text={`Получить код повторно ${
                getCodeTime !== 0 ? `через ${this.getFormattedSeconds(getCodeTime)}` : ``
              }`}
              color="secondary"
              onClick={this.getCodeAgain}
            />
          )}

          {submitCodeStage && (
            <RenderTooltip disableFocusListener disableTouchListener title={<TooltipTitle />} placement="right">
              <Field
                name="confirmationCode"
                component={RenderTextField}
                label="Код подтверждения"
                type="number"
                normalize={onlyFiveNumbers}
              />
            </RenderTooltip>
          )}

          <RenderButton
            type="submit"
            disabled={!valid || submitting}
            text={getCodeStage ? 'Получить код' : 'Отправить код'}
            color="primary"
            onClick={this.startTimer}
          />

          {getCodeError && <RenderSnackbar variant="error" message={getCodeError} />}
          {submitCodeError && <RenderSnackbar variant="error" message={submitCodeError} />}
        </form>
      </div>
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
  getCodeError: state.user.getCodeError,
  submitCodeError: state.user.submitCodeError,
  formValues: getFormValues('ConfirmPhone')(state)
})

const mapDispatchToProps = {
  getCode
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmPhone)
