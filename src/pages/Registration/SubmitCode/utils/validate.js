const validate = values => {
  const errors = {}

  if (!values.confirmationCode) {
    errors.confirmationCode = 'Обязательное поле'
  } else if (values.confirmationCode.length !== 5) {
    errors.confirmationCode = 'Введите корректный номер телефона'
  }

  return errors
}

export default validate
