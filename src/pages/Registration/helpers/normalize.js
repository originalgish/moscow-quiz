const onlyFiveNumbers = value => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/\D/g, '')

  if (onlyNums.length <= 5) {
    return onlyNums
  } else {
    return `${onlyNums.slice(0, 5)}`
  }
}

export { onlyFiveNumbers }
