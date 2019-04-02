import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import RenderTextField from '../../components/RenderTextField'
import RenderButton from '../../components/RenderButton'
import RenderSnackbar from '../../components/RenderSnackbar'

import submit from './utils/submit'
import validate from './utils/validate'

import { FullScreenCenter } from '../../styles/app/app'
import { ResetPasswordForm, Title, BackToLogin, ResetPasswordContainer, FormTitle, StyledLink } from './styles'

class ResetPassword extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting, resetPasswordError } = this.props
    return (
      <FullScreenCenter withImage>
        <ResetPasswordContainer>
          <Title>Московский закупочный квест</Title>
          <ResetPasswordForm onSubmit={handleSubmit}>
            <FormTitle>Введите E-mail для восстановления пароля</FormTitle>

            <Field name="email" component={RenderTextField} label="E-mail" type="text" />
            <RenderButton type="submit" disabled={!valid || submitting} text="Напомнить пароль" color="primary" />

            <BackToLogin>
              <StyledLink to="/login">Вернуться</StyledLink> ко входу.
            </BackToLogin>
          </ResetPasswordForm>
        </ResetPasswordContainer>
        {resetPasswordError && <RenderSnackbar variant="error" message={resetPasswordError} />}
      </FullScreenCenter>
    )
  }
}

ResetPassword = reduxForm({
  form: 'ResetPassword',
  onSubmit: submit,
  validate
})(ResetPassword)

const mapStateToProps = state => ({
  resetPasswordError: state.user.resetPasswordError
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword)
