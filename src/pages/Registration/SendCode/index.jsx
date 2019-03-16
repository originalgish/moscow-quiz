import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import renderTextField from '../../../components/renderTextField'

import { onlyFiveNumbers } from '../helpers/normalize'

import submit from './utils/submit'
import validate from './utils/validate'

import './index.scss'

class SendCode extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="confirmationCode"
          component={renderTextField}
          label="Код подтверждения"
          type="number"
          normalize={onlyFiveNumbers}
        />
        <button type="submit" disabled={!valid || submitting}>
          Отправить код
        </button>
      </form>
    )
  }
}

SendCode = reduxForm({
  form: 'SendCode',
  onSubmit: submit,
  validate
})(SendCode)

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendCode)
