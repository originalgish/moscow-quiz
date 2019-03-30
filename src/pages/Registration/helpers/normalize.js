const onlyFourNumbers = value => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/\D/g, '')

  if (onlyNums.length <= 4) {
    return onlyNums
  } else {
    return `${onlyNums.slice(0, 4)}`
  }
}

export { onlyFourNumbers }
