const validate = values => {
  const errors = {}

  if (!values.phone) {
    errors.phone = 'Обязательное поле'
  } else if (values.phone.length !== 18) {
    errors.phone = 'Введите корректный номер телефона'
  }

  if (!values.phoneConfirmationCode) {
    errors.phoneConfirmationCode = 'Обязательное поле'
  } else if (values.phoneConfirmationCode.length !== 4) {
    errors.phoneConfirmationCode = 'Введите 4 цифры'
  }

  return errors
}

export default validate
