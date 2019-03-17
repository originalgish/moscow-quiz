import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import RenderTextField from '../../components/RenderTextField'
import RenderButton from '../../components/RenderButton'

import submit from './utils/submit'
import validate from './utils/validate'

import './index.scss'

class ResetPassword extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <div className="fullscreen-center">
        <form onSubmit={handleSubmit} className="reset-password-form">
          <h1>Пароль будет выслан на указанный email.</h1>

          <Field name="email" component={RenderTextField} label="E-mail" type="text" />
          <RenderButton type="submit" disabled={!valid || submitting} text="Напомнить пароль" color="primary" />

          <span>
            <Link to="/login">Вернуться</Link> ко входу.
          </span>
        </form>
      </div>
    )
  }
}

ResetPassword = reduxForm({
  form: 'ResetPassword',
  onSubmit: submit,
  validate
})(ResetPassword)

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword)
