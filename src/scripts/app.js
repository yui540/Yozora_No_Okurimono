import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import YozoraNoOkurimono from './components/YozoraNoOkurimono'
import '../scss/style.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <YozoraNoOkurimono />
  </Provider>,
  document.getElementById('root')
)
