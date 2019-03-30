import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import RenderTextField from '../../components/RenderTextField'
import RenderButton from '../../components/RenderButton'

import submit from './utils/submit'
import validate from './utils/validate'

import { FullScreenCenter } from '../../styles/app/app'
import { ResetPasswordForm, Title, BackToLogin, ResetPasswordContainer, FormTitle, StyledLink } from './styles'

class ResetPassword extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <FullScreenCenter>
        <ResetPasswordContainer>
          <Title>Московский закупочный квест</Title>
          <ResetPasswordForm onSubmit={handleSubmit}>
            <FormTitle>Введите данные для регистрации</FormTitle>

            <Field name="email" component={RenderTextField} label="E-mail" type="text" />
            <RenderButton type="submit" disabled={!valid || submitting} text="Напомнить пароль" color="primary" />

            <BackToLogin>
              <StyledLink to="/login">Вернуться</StyledLink> ко входу.
            </BackToLogin>
          </ResetPasswordForm>
        </ResetPasswordContainer>
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
