const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Обязательное поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный email'
  }

  if (!values.emailConfirmationCode) {
    errors.emailConfirmationCode = 'Обязательное поле'
  }

  return errors
}

export default validate
