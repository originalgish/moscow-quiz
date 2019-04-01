import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, initialize } from 'redux-form'
import { get } from 'lodash'
import { isMobile } from 'react-device-detect'

import RenderTextField from '../../../components/RenderTextField'
import RenderCheckbox from '../../../components/RenderCheckbox'
import RenderButton from '../../../components/RenderButton'
import RenderTextFieldPassword from '../../../components/RenderTextFieldPassword'
import RenderSnackbar from '../../../components/RenderSnackbar'

import submit from './utils/submit'
import validate from './utils/validate'
import initialValues from './utils/initialValues'

import { FullScreenCenter } from '../../../styles/app/app'
import { RegisterUserForm, Title, RegisterUserContainer, FormTitle, LoginCall, StyledLink } from './styles'

class RegisterUser extends Component {
  state = {}

  componentDidMount() {
    const { confirmedData } = this.props
    if (confirmedData) {
      this.props.initialize({
        ...initialValues,
        ...confirmedData
      })
    }
  }

  render() {
    const { handleSubmit, valid, submitting, registerUserErrorText } = this.props
    return (
      <FullScreenCenter mobile={isMobile} withImage>
        <RegisterUserContainer>
          <Title>Московский закупочный квест</Title>

          <RegisterUserForm onSubmit={handleSubmit}>
            <FormTitle>Введите данные для регистрации</FormTitle>
            <Field name="firstName" component={RenderTextField} label="Имя" type="text" />
            <Field name="lastName" component={RenderTextField} label="Фамилия" type="text" />
            <Field name="nickName" component={RenderTextField} label="Никнейм" type="text" />
            <Field name="city" component={RenderTextField} label="Город" type="text" />
            {/* <Field name="email" component={RenderTextField} label="E-mail" type="email" /> */}
            <Field name="password" component={RenderTextFieldPassword} label="Пароль" labelWidth={58} />
            <Field
              name="confirmPassword"
              component={RenderTextFieldPassword}
              label="Подтвердите пароль"
              labelWidth={158}
            />
            <Field
              name="policyAgreement"
              component={RenderCheckbox}
              label={
                <span>
                  Я даю согласие на обработку персональных данных, согласно{' '}
                  <StyledLink to="/static/confidential.pdf" target="_blank" rel="noopener noreferrer">
                    политике конфиденциальности
                  </StyledLink>
                </span>
              }
            />
            <RenderButton type="submit" disabled={!valid || submitting} text="Зарегистрироваться" color="primary" />
            <LoginCall>
              Уже зарегистрированы? <StyledLink to="/login">Войти</StyledLink>
            </LoginCall>

            {registerUserErrorText && <RenderSnackbar variant="error" message={registerUserErrorText} />}
          </RegisterUserForm>
        </RegisterUserContainer>
      </FullScreenCenter>
    )
  }
}

RegisterUser = reduxForm({
  form: 'RegisterUser',
  onSubmit: submit,
  validate,
  initialValues,
  destroyOnUnmount: false
})(RegisterUser)

const mapStateToProps = state => ({
  confirmedData: {
    phone: get(state.form, 'ConfirmPhone.values.phone'),
    email: get(state.form, 'ConfirmEmail.values.email')
  },
  registerUserErrorText: state.user.registerUserErrorText
})

const mapDispatchToProps = {
  initialize
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUser)
