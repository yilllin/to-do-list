import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Item({ item }) {
    return (
      <li id={item?.id} className="todo_item">
        <button className="todo_items_left">
          <p>{item?.title}</p>
        </button>
        <div className="todo_items_right">
          <button>
            <Grid item xs={8}>
              <EditNoteIcon />
            </Grid>
          </button>
          <button>
            <Grid item xs={8}>
              <DeleteIcon />
            </Grid>
          </button>
        </div>
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