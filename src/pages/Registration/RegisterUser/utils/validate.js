const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Обязательное поле'
  } else if (/[^а-яё ]/i.test(values.firstName)) {
    errors.firstName = 'Имя должно быть написано кириллицей'
  }

  if (!values.lastName) {
    errors.lastName = 'Обязательное поле'
  } else if (/[^а-яё ]/i.test(values.lastName)) {
    errors.lastName = 'Фамилия должна быть написана кириллицей'
  }

  if (!values.nickName) {
    errors.nickName = 'Обязательное поле'
  }

  if (values.nickName) {
    if (values.nickName.length > 20) {
      errors.nickName = 'Длина должна быть не более 20 символов'
    }
  }

  if (!values.city) {
    errors.city = 'Обязательное поле'
  } else if (/[^а-яё 0-9-–]/i.test(values.city)) {
    errors.city = 'Город должен быть написан кириллицей'
  }

  if (!values.email) {
    errors.email = 'Обязательное поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный email'
  }

  if (!values.password) {
    errors.password = 'Обязательное поле'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Обязательное поле'
  }

  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Пароли не совпадают'
  }
  if (!values.policyCheckbox) {
    errors.policyCheckbox = 'Обязательное поле'
  }

  if (!values.policyAgreement) {
    errors.policyAgreement = 'Обязательное поле'
  }

  return errors
}

export default validate
