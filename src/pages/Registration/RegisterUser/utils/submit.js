import { registerUser } from '../../../../actions/user'

const submit = (state, dispatch) => dispatch(registerUser(state))

export default submit
