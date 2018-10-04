import { connect } from 'react-redux'
import Chapter3 from '../components/Chapter3'
import { changeChapter } from '../actions/opening'
import { closeMenu } from '../actions/menu'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    dispatch(changeChapter('top'))
  },
  closeMenu() {
    dispatch(closeMenu())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chapter3)
