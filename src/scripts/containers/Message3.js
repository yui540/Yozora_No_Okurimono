import { connect } from 'react-redux'
import Message3 from '../components/Message3'
import { changeMessage } from '../actions/message'

const mapStateToProps = state => ({
  num: state.message.num,
  effect: state.menu.effect
})

const mapDispatchToProps = dispatch => ({
  changeMessage() {
    dispatch(changeMessage(1))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message3)
