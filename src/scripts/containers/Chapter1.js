import { connect } from 'react-redux'
import Chapter1 from '../components/Chapter1'
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
)(Chapter1)
