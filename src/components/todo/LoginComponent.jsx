import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'pauburgos10',
      password: '',
      hasLoginFailed: false,
      hasLoginOk: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)

  }

  handleChange(event) {
    //al ponerlo en corchetes lo convertimos de variable a constante
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loginClicked() {
    if (this.state.username === 'pauburgos10' && this.state.password === 'dummy') {
      AuthenticationService.regiserSuccessfulLogin(this.state.username, this.state.password)
      this.props.history.push(`/welcome/${this.state.username}`)
      //this.setState({ hasLoginFailed: false })
      // this.setState({ hasLoginOk: true })
    } else {
      this.setState({ hasLoginFailed: true })
      //this.setState({ hasLoginOk: false })
    }
  }


  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container"></div>
        {this.state.hasLoginOk && <div >Login Successful</div>}
        {this.state.hasLoginFailed && <div className="alert alert-warning">Login Failed</div>}
        {/*<ShowLoginSuccessful hasLoginOk={this.state.hasLoginOk}></ShowLoginSuccessful>
        <ShowLoginFailed hasLoginFailed={this.state.hasLoginFailed}></ShowLoginFailed>*/}
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
      </div>
    )
  }
}

export default LoginComponent