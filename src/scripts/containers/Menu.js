import { connect } from 'react-redux'
import Menu from '../components/Menu'
import { closeMenu } from '../actions/menu'

const mapStateToProps = state => ({
  menu: state.menu.menu
})

const mapDispatchToProps = dispatch => ({
  closeMenu() {
    dispatch(closeMenu())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
