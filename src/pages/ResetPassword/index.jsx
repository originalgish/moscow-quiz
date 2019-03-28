import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import RenderTextField from '../../components/RenderTextField'
import RenderButton from '../../components/RenderButton'

import submit from './utils/submit'
import validate from './utils/validate'

import { FullScreenCenter } from '../../styles/app/app'
import { ResetPasswordForm, Title, BackToLogin } from './styles'

class ResetPassword extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <FullScreenCenter>
        <ResetPasswordForm onSubmit={handleSubmit}>
          <Title>Пароль будет выслан на указанный email</Title>

          <Field name="email" component={RenderTextField} label="E-mail" type="text" />
          <RenderButton type="submit" disabled={!valid || submitting} text="Напомнить пароль" color="primary" />

          <BackToLogin>
            <Link to="/login">Вернуться</Link> ко входу.
          </BackToLogin>
        </ResetPasswordForm>
      </FullScreenCenter>
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
