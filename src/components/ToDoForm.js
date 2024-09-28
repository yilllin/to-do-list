import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ToDoForm({ todos, setTodos }) {
    const submit = e => {
      e.preventDefault();
      const value = e.target.todo.value;
      const newTodo = {
        title: value,
        id: Date.now(),
      };
      setTodos((prevTodos) => [ ...prevTodos, newTodo ]);
      const updatedTodoList = JSON.stringify([...todos, newTodo]);
      localStorage.setItem("todos", updatedTodoList);
      e.target.reset();
    };
    return (
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '36ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={submit}
      >
        <Grid 
          container 
          spacing={1} 
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item size={8}>
            <TextField id="todo" label="Task" variant="outlined" />
          </Grid>
          <Grid item size={4}>
            <Button variant="text"> Add </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  export default ToDoForm;