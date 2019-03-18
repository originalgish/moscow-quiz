import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import RenderTextField from '../../../components/RenderTextField'
import RenderCheckbox from '../../../components/RenderCheckbox'
import RenderButton from '../../../components/RenderButton'

import submit from './utils/submit'
import validate from './utils/validate'
import initialValues from './utils/initialValues'

import './index.scss'

class RegisterUser extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <div className="fullscreen-center">
        <form onSubmit={handleSubmit} className="register-user-form">
          <h1>Введите данные для регистрации</h1>
          <Field name="firstName" component={RenderTextField} label="Имя" type="text" />
          <Field name="lastName" component={RenderTextField} label="Фамилия" type="text" />
          <Field name="nickName" component={RenderTextField} label="Никнейм" type="text" />
          <Field name="city" component={RenderTextField} label="Город" type="text" />
          <Field name="email" component={RenderTextField} label="E-mail" type="email" />
          <Field
            name="policyAgreement"
            component={RenderCheckbox}
            label="Я даю согласие на обработку персональных данных, 
              согласно политике конфиденциальности."
          />
          <RenderButton type="submit" disabled={!valid || submitting} text="Получить пароль" color="primary" />
        </form>
      </div>
    )
  }
}

RegisterUser = reduxForm({
  form: 'RegisterUser',
  onSubmit: submit,
  validate,
  initialValues
})(RegisterUser)

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUser)
