import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, initialize } from 'redux-form'
import { get } from 'lodash'

import RenderTextField from '../../components/RenderTextField'
import RenderTextFieldPassword from '../../components/RenderTextFieldPassword'
import RenderButton from '../../components/RenderButton'
import RenderSnackbar from '../../components/RenderSnackbar'

import submit from './utils/submit'
import validate from './utils/validate'

import { FullScreenCenter } from '../../styles/app/app'
import { LoginForm, Title, LoginContainer, RegisterCall, ForgotPassword, StyledLink } from './styles'

class Login extends Component {
  state = {}

  componentDidMount() {
    const { registrationEmail } = this.props
    if (registrationEmail) {
      this.props.initialize({ email: registrationEmail })
    }
  }

  render() {
    const { handleSubmit, valid, submitting, loginErrorText, hasResetPassword } = this.props
    return (
      <FullScreenCenter withImage>
        <LoginContainer>
          <Title>Московский закупочный квест</Title>
          <LoginForm onSubmit={handleSubmit} className="login-form">
            <RegisterCall>
              Введите свои данные или
              <br /> <StyledLink to="/registration">зарегистрируйтесь</StyledLink>, если Вы здесь впервые
            </RegisterCall>
            <Field name="email" component={RenderTextField} label="E-mail" type="text" />
            <Field name="password" component={RenderTextFieldPassword} label="Пароль" labelWidth={58} />
            <RenderButton type="submit" disabled={!valid || submitting} text="Войти" color="primary" />
            <ForgotPassword>
              Забыли пароль? <StyledLink to="/reset_password">Напомнить</StyledLink>
            </ForgotPassword>
          </LoginForm>
        </LoginContainer>
        {loginErrorText && <RenderSnackbar variant="error" message={loginErrorText} />}
        {hasResetPassword && <RenderSnackbar variant="success" message="Мы выслали Вам на почту новый пароль" />}
      </FullScreenCenter>
    )
  }
}

Login = reduxForm({
  form: 'Login',
  onSubmit: submit,
  validate
})(Login)

const mapStateToProps = state => ({
  registrationEmail: get(state.form, 'ConfirmEmail.values.email'),
  loginErrorText: state.user.loginErrorText,
  hasResetPassword: state.user.hasResetPassword
})

const mapDispatchToProps = {
  initialize
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
