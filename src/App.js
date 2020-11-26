import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css'
import './App.css';


 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter></Counter>*/}
        <TodoApp></TodoApp>
      </div>
    );
  }
}
export default App;