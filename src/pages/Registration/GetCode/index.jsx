import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import RenderTextField from '../../../components/RenderTextField'
import RenderButton from '../../../components/RenderButton'
import { phoneMask } from '../helpers/inputMask'

import submit from './utils/submit'
import validate from './utils/validate'

import './index.scss'

class GetCode extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <div className="fullscreen-center">
        <form onSubmit={handleSubmit} className="get-code-form">
          <h1>Введите номер телефона</h1>
          <Field name="phone" component={RenderTextField} label="Телефон" type="tel" {...phoneMask} />
          <RenderButton type="submit" disabled={!valid || submitting} text="Получить код" color="primary" />
        </form>
      </div>
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
