const getCodeErrors = code => {
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

const registerUserCodeErrors = code => {
  switch (code) {
    case 409:
      return 'E-mail или никнейм не уникален'
    case 444:
      return 'Ошибка соединения с сервером'

    default:
      return 'Произошла ошибка, попробуйте снова'
  }
}

export { getCodeErrors, submitCodeErrors, registerUserCodeErrors }
