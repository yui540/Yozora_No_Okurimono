import { connect } from 'react-redux'
import Home from '../components/Home'

const mapPropsToState = state => ({
  chapter: state.opening.chapter
})

export default connect(mapPropsToState)(Home)
