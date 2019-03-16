const validate = values => {
  const errors = {}

  if (!values.phone) {
    errors.phone = 'Обязательное поле'
  } else if (values.phone.length !== 10) {
    errors.phone = 'Введите корректный номер телефона'
  }

  return errors
}

export default validate
