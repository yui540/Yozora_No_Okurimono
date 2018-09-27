import { connect } from 'react-redux'
import LoadView from '../components/LoadView'
import { changeChapter } from '../actions/opening'

const mapStateToProps = state => ({
  chapter: state.opening.chapter
})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    dispatch(changeChapter('load'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadView)
