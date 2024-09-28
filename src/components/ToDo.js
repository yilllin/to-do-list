import * as React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function ToDo() {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
    }, []);
    
    return (
        <> 
            <ToDoForm todos={todos} setTodos={setTodos} />
            <ToDoList todos={todos} setTodos={setTodos} />
        </>
    );
  }
  export default ToDo;