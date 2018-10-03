import { connect } from 'react-redux'
import Message2 from '../components/Message2'
import { changeMessage } from '../actions/message'

const mapStateToProps = state => ({
  num: state.message.num,
  effect: state.menu.effect
})

const mapDispatchToProps = dispatch => ({
  changeMessage() {
    dispatch(changeMessage(3))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message2)
