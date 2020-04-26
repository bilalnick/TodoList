
import React, { Component } from 'react';

import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid"



class App extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-itallic text-center">Todo Input</h3>
            <TodoInput />
            <Todolist />
          </div>
        </div>
      </div>

    );
  }
}

export default App;

