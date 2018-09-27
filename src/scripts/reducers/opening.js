import { CHANGE_CHAPTER } from '../constants/opening'

const chapter = 'load'
const init = { chapter }

export default (state = init, action) => {
  switch (action.type) {
    case CHANGE_CHAPTER:
      return Object.assign({}, state, {
        chapter: action.payload.chapter
      })
    default:
      return state
  }
}
