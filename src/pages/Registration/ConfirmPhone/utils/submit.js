import { getCode, submitCode } from '../../../../actions/user'

const submit = (state, dispatch, props) => {
  const { getCodeStage } = props
  if (getCodeStage) {
    return dispatch(getCode(state))
  } else {
    return dispatch(submitCode(state))
  }
}

export default submit
