const validate = values => {
  const errors = {}

  if (!values.confirmationCode) {
    errors.confirmationCode = 'Обязательное поле'
  } else if (values.confirmationCode.length !== 5) {
    errors.confirmationCode = 'Введите 5 цифр'
  }

  return errors
}

export default validate
