import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';

function ToDoForm({ setTodos }) {
    const submit = e => {
        e.preventDefault();
        const value = e.target.todo.value;
        setTodos((prevTodos) => [
          ...prevTodos,
          { title: value, id: Date.now() },
        ]);
        e.target.reset();
      };
      return (
        <form className="form" onSubmit={submit}>
          <label htmlFor="todo">
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="Write your next task"
            />
          </label>
          <button>
            <span className="visually-hidden">Submit</span>
          </button>
        </form>
        
      );
  }
  export default ToDoForm;


{/* <Box
    component="form"
    onSubmit={handleSubmit}
    noValidate
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 2,
      alignItems: 'center',
    }}
  >
    <Stack spacing={2} direction="row">
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button variant="text" href="#text-buttons">Submit</Button>
    </Stack>
</Box> */}