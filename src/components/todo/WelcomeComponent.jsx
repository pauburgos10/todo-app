import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component {

  constructor(props) {
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    this.handleError = this.handleError.bind(this)
    this.state = {
      welcomeMessage : ''
    }
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">Welcome {this.props.match.params.user}.
        Manage your todos <Link to="/">here</Link></div>
        <div className="container">
          Click to get customized message
          <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get welcome message</button>
        </div>
        <div className="container">
          {this.state.welcomeMessage}
        </div>
      </>
    )
  }

  retrieveWelcomeMessage() {
    /*HelloWorldService.executeService()
    .then((res) => {
      this.handleSuccessfulResponse(res)
    })*/

    /*HelloWorldService.executeBeanService()
    .then((res) => {
      this.handleSuccessfulResponse(res)
    })*/

    HelloWorldService.executePathVariableService(this.props.match.params.user)
    .then((res) => {
      this.handleSuccessfulResponse(res)
    })
    .catch((err) => {
      this.handleError(err)
    })
  }

  handleError(err) {

  }

  handleSuccessfulResponse(res){
    this.setState({welcomeMessage : res.data.message})
  }
}

export default withRouter(WelcomeComponent)
