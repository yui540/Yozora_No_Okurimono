import { connect } from 'react-redux'
import Chapter2 from '../components/Chapter2'
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
)(Chapter2)
