import { login } from '../../../actions/user'

const submit = (state, dispatch) => dispatch(login(state))

export default submit
