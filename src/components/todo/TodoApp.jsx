import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'

class TodoApp extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <HeaderComponent />
          {/*Usamos switch para que solo una ruta pueda ser valida a la vez*/}
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/login" component={LoginComponent} />
            <AuthenticatedRoute path="/welcome/:  " component={WelcomeComponent} />
            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent}></Route>
          </Switch>
          <FooterComponent />
        </BrowserRouter>
      </div>
    )
  }
}

export default TodoApp