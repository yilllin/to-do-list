import React, { useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Item({ item, setTodos}) {
  // edit
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);
  const handleEdit = () => {
    setEditing(true);
  };
  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);
  const handleInpuSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };
  const handleInputBlur = () => {
    setEditing(false);
  };
  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  // delete
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };
  
  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInpuSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <div>
            <button className="todo_items_left">
              <p>{item?.title}</p>
            </button>
            <div className="todo_items_right">
              <IconButton>
                <EditNoteIcon onClick={handleEdit} />
              </IconButton>
              <IconButton>
                <DeleteIcon onClick={handleDelete} />
              </IconButton>
            </div>
        </div>
      )}
    </li>
  );
}

function ToDoList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => 
        <Item key={index} item={item} setTodos={setTodos}/>
      )) : (
        <p>Empty</p>
      )}
    </ol>
  );
}
export default ToDoList;