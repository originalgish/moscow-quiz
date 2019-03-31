import { GET_POSITION } from '../../constants'
import { URLs, keys } from '../../keys'
import { GET } from '../../api/fetch'

const getPosition = () => async dispatch => {
  // const url = `${URLs.mock200}`
  const token = localStorage.getItem(keys.accessToken)
  const url = `${URLs.production}/api/v1/get_position`
  const request = await GET(url, token)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch({
      type: GET_POSITION,
      payload: data
    })
  }

  console.log(data, status)
  return request
}

export default getPosition
