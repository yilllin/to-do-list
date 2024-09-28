import * as React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function ToDo() {
    const [todos, setTodos] = React.useState([]);
    return (
        <> 
            <ToDoForm setTodos={setTodos} />
            <ToDoList todos={todos} setTodos={setTodos} />
        </>
    );
  }
  export default ToDo;