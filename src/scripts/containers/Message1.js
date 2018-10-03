import { connect } from 'react-redux'
import Message1 from '../components/Message1'
import { changeMessage } from '../actions/message'

const mapStateToProps = state => ({
  num: state.message.num,
  effect: state.menu.effect
})

const mapDispatchToProps = dispatch => ({
  changeMessage() {
    dispatch(changeMessage(2))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message1)
