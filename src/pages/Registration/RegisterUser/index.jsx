import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, initialize } from 'redux-form'
import { get } from 'lodash'

import RenderTextField from '../../../components/RenderTextField'
import RenderCheckbox from '../../../components/RenderCheckbox'
import RenderButton from '../../../components/RenderButton'
import RenderTextFieldPassword from '../../../components/RenderTextFieldPassword'

import submit from './utils/submit'
import validate from './utils/validate'
import initialValues from './utils/initialValues'

import { FullScreenCenter } from '../../../styles/app/app'
import { RegisterUserForm, Title } from './styles'

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
    const { handleSubmit, valid, submitting } = this.props
    return (
      <FullScreenCenter>
        <RegisterUserForm onSubmit={handleSubmit}>
          <Title>Введите данные для регистрации</Title>
          <Field name="firstName" component={RenderTextField} label="Имя" type="text" />
          <Field name="lastName" component={RenderTextField} label="Фамилия" type="text" />
          <Field name="nickName" component={RenderTextField} label="Никнейм" type="text" />
          <Field name="city" component={RenderTextField} label="Город" type="text" />
          <Field name="email" component={RenderTextField} label="E-mail" type="email" />
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
            label="Я даю согласие на обработку персональных данных, 
              согласно политике конфиденциальности."
          />
          <RenderButton type="submit" disabled={!valid || submitting} text="Зарегистрироваться" color="primary" />
        </RegisterUserForm>
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
  confirmedData: get(state.form, 'ConfirmPhone.values')
})

const mapDispatchToProps = {
  initialize
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUser)
