import { CHANGE_CHAPTER } from '../constants/opening'

export const changeChapter = (chapter) => ({
  type: CHANGE_CHAPTER,
  payload: {
    chapter
  }
})
