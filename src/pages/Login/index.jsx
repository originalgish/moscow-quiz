import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import RenderTextField from '../../components/RenderTextField'
import RenderButton from '../../components/RenderButton'

import submit from './utils/submit'
import validate from './utils/validate'

import './index.scss'

class Login extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" component={RenderTextField} label="E-mail" type="text" />
        <Field name="password" component={RenderTextField} label="Пароль" type="password" />
        <RenderButton type="submit" disabled={!valid || submitting} text="Войти" color="primary" />
      </form>
    )
  }
}

Login = reduxForm({
  form: 'GetCode',
  onSubmit: submit,
  validate
})(Login)

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
