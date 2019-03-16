import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import renderTextField from '../../../components/renderTextField'
import { phoneMask } from '../helpers/inputMask'

import submit from './utils/submit'
import validate from './utils/validate'

import './index.scss'

class GetCode extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="phone" component={renderTextField} label="Телефон" type="tel" {...phoneMask} />
        <button type="submit" disabled={!valid || submitting}>
          Получить код
        </button>
      </form>
    )
  }
}

GetCode = reduxForm({
  form: 'GetCode',
  onSubmit: submit,
  validate
})(GetCode)

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetCode)
