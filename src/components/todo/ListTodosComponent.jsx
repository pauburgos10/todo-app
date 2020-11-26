import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'



class ListTodosComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    let user = AuthenticationService.getLoggedInUserName()
    TodoDataService.retrieveAllTodos(user)
    .then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  shouldComponentUpdate

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Completed</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.todos.map(
                  todo =>
                    <tr key={todo.id}>
                      <td >{todo.id}</td>
                      <td>{todo.description}</td>
                      <td>{todo.done.toString()}</td>
                      <td>{todo.targetDate.toString()}</td>
                    </tr>
                )
              }

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListTodosComponent