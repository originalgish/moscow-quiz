import { getEmailCode, submitEmailCode } from '../../../../actions/user'

const submit = (state, dispatch, props) => {
  const { getCodeStage } = props
  if (getCodeStage) {
    return dispatch(getEmailCode(state))
  } else {
    return dispatch(submitEmailCode(state))
  }
}

export default submit
