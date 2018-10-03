import { CHANGE_MESSAGE } from '../constants/message'

export const changeMessage = num => ({
  type: CHANGE_MESSAGE,
  payload: {
    num
  }
})
