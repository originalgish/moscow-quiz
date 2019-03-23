import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Duration } from 'luxon'

import { getCode } from '../../../actions/user'

import RenderTextField from '../../../components/RenderTextField'
import RenderButton from '../../../components/RenderButton'
import RenderTooltip from '../../../components/RenderTooltip'
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

  getCodeAgain = () => {
    this.props.getCode()
    this.setState({ getCodeTime: this.WAIT_TIME })
    this.timer = setInterval(() => {
      this.setState({ getCodeTime: this.state.getCodeTime - 1 })
    }, 1000)
  }

  getFormattedSeconds = seconds => Duration.fromObject({ seconds }).toFormat('mm:ss')

  render() {
    const { handleSubmit, valid, submitting, getCodeStage, submitCodeStage, submitCodeError } = this.props
    const { getCodeTime } = this.state
    return (
      <div className="fullscreen-center">
        <form onSubmit={handleSubmit} className="confirm-phone-form">
          <h1>{getCodeStage ? 'Введите номер телефона' : 'Подтвердите номер телефона'}</h1>

          <Field name="phone" component={RenderTextField} label="Телефон" type="tel" {...phoneMask} />

          {submitCodeError && (
            <button onClick={this.getCodeAgain}>{`Получить код повторно ${
              getCodeTime !== 0 ? `через ${this.getFormattedSeconds(getCodeTime)}` : ``
            }`}</button>
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
          />
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
  submitCodeError: state.user.submitCodeError
})

const mapDispatchToProps = { getCode }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmPhone)
