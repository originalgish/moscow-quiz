import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

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
  state = {}
  render() {
    const { handleSubmit, valid, submitting, getCodeStage, submitCodeStage } = this.props
    return (
      <div className="fullscreen-center">
        <form onSubmit={handleSubmit} className="confirm-phone-form">
          <h1>{getCodeStage ? 'Введите номер телефона' : 'Подтвердите номер телефона'}</h1>

          <Field name="phone" component={RenderTextField} label="Телефон" type="tel" {...phoneMask} />

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
  validate
})(ConfirmPhone)

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmPhone)
