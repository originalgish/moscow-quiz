import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, initialize } from 'redux-form'
import { Link } from 'react-router-dom'
import { get } from 'lodash'

import RenderTextField from '../../components/RenderTextField'
import RenderTextFieldPassword from '../../components/RenderTextFieldPassword'
import RenderButton from '../../components/RenderButton'

import submit from './utils/submit'
import validate from './utils/validate'

import './index.scss'

class Login extends Component {
  state = {}

  componentDidMount() {
    const { registrationEmail } = this.props
    if (registrationEmail) {
      this.props.initialize({ email: registrationEmail })
    }
  }

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <div className="fullscreen-center">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Войти</h1>
          <Field name="email" component={RenderTextField} label="E-mail" type="text" />
          <Field name="password" component={RenderTextFieldPassword} label="Пароль" labelWidth={58} />
          <RenderButton type="submit" disabled={!valid || submitting} text="Войти" color="primary" />
          <span>
            Забыли пароль? <Link to="/reset_password">Напомнить</Link>
          </span>
        </form>
      </div>
    )
  }
}

Login = reduxForm({
  form: 'Login',
  onSubmit: submit,
  validate
})(Login)

const mapStateToProps = state => ({
  registrationEmail: get(state.form, 'RegisterUser.values.email')
})

const mapDispatchToProps = {
  initialize
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
