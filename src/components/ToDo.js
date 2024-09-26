import * as React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function ToDo() {
    const [todos, setTodos] = React.useState([]);
    return (
        <div>
            <ToDoForm setTodos={setTodos}/>
            <ToDoList todos={todos} setTodos={setTodos}/>
        </div>
    );
  }
  export default ToDo;