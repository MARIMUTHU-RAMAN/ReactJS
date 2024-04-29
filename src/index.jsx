/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App'
import { Route, Router } from '@solidjs/router'

import Login from './Login/Login'
import Sidebar from './Layout/Sidebar'


const root = document.getElementById('root')

render(
  () => (
    <Router root={App}>
      <Route path="/login" component={Login} />
      <Route path="/sidebar" component={Sidebar} />
    </Router>
  ),
  root,
)