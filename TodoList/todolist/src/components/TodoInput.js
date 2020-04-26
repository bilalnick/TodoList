
import React, { Component } from 'react';
import TodoList from './TodoList'

class TodoInput extends Component {
    render() {
        return <div className="card  card-body my-3">

            <form>
                <div className="input-group">

                    <div className="input-group-prepend">

                        <div className="input-group-text bg-primary text-white"></div>
                    </div>

                </div>
                <input type="text" className="form-control text-capitalize"
                    placeholder=" add a todo item" />


                <button type="sumbit" className="btn  btn-block  btn-primary  mt-3">add item</button>

            </form>





        </div>
    }
}

export default TodoInput