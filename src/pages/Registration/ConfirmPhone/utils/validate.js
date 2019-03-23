const validate = values => {
  const errors = {}

  if (!values.phone) {
    errors.phone = 'Обязательное поле'
  } else if (values.phone.length !== 18) {
    errors.phone = 'Введите корректный номер телефона'
  }

  if (!values.confirmationCode) {
    errors.confirmationCode = 'Обязательное поле'
  } else if (values.confirmationCode.length !== 4) {
    errors.confirmationCode = 'Введите 4 цифры'
  }

  return errors
}

export default validate
