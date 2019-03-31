import { getPhoneCode, submitPhoneCode } from '../../../../actions/user'

const submit = (state, dispatch, props) => {
  const { getCodeStage } = props
  if (getCodeStage) {
    return dispatch(getPhoneCode(state))
  } else {
    return dispatch(submitPhoneCode(state))
  }
}

export default submit
