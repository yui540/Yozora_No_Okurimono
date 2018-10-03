import { CHANGE_MESSAGE } from '../constants/message'

const init = { num: 1 }

export default (state = init, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return Object.assign({}, state, {
        num: action.payload.num
      })
    default:
      return state
  }
}
