const getPhoneCodeErrors = code => {
  switch (code) {
    case 407:
      return 'Сообщение на указанный номер не может быть доставлено'
    case 409:
      return 'Номер уже зарегистрирован'

    default:
      return 'Произошла ошибка, попробуйте снова'
  }
}

const submitCodeErrors = code => {
  switch (code) {
    case 401:
      return 'Неправильно введен код'
    case 409:
      return 'Произошла ошибка, попробуйте через минуту'

    default:
      return 'Произошла ошибка, попробуйте снова'
  }
}

const getEmailCodeErrors = code => {
  switch (code) {
    case 409:
      return 'E-mail уже зарегистрирован'

    default:
      return 'Произошла ошибка, попробуйте снова'
  }
}

const submitEmailCodeErrors = code => {
  switch (code) {
    case 401:
      return 'Неправильно введен код'
    case 409:
      return 'Произошла ошибка, попробуйте через минуту'

    default:
      return 'Произошла ошибка, попробуйте снова'
  }
}

const registerUserCodeErrors = code => {
  switch (code) {
    case 409:
      return 'Никнейм не уникален'
    case 444:
      return 'Ошибка соединения с сервером'

    default:
      return 'Произошла ошибка, попробуйте снова'
  }
}

const loginErrors = code => {
  switch (code) {
    case 401:
      return 'Неправильный e-mail или пароль'
    default:
      return 'Произошла ошибка, попробуйте снова'
  }
}

export {
  getPhoneCodeErrors,
  submitCodeErrors,
  getEmailCodeErrors,
  submitEmailCodeErrors,
  registerUserCodeErrors,
  loginErrors
}
