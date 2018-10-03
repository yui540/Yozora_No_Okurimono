import { OPEN_MENU, CLOSE_MENU } from '../constants/menu'

const init = {
  effect: 'start',
  menu: false
}

export default (state = init, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return Object.assign({}, state, {
        effect: 'stop',
        menu: true
      })
    case CLOSE_MENU:
      return Object.assign({}, state, {
        effect: 'start',
        menu: false
      })
    default:
      return state
  }
}
