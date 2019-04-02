import { resetPassword } from '../../../actions/user'

const submit = (state, dispatch) => dispatch(resetPassword(state))

export default submit
