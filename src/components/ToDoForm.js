import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function ToDoForm({ todos, setTodos }) {
    const [time, setTime] = React.useState(null);

    const submit = e => {
      e.preventDefault();
      const value = e.target.todo.value;
      const newTodo = {
        title: value,
        datetime: time.toISOString(),
        id: window.crypto.randomUUID(),
      };
      setTodos((prevTodos) => [ ...prevTodos, newTodo ]);
      const updatedTodoList = JSON.stringify([...todos, newTodo]);
      localStorage.setItem("todos", updatedTodoList);
      e.target.reset();
    };

    return (
      <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={submit}
    >
      <Stack
        spacing={1}
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        sx={{ width: '100%' }}
      >

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            id="datetime"
            name="datetime"
            label="DateTime"
            value={time}
            onChange={setTime}
            referenceDate={dayjs()}
            sx={{ width: '100%' }}
          />
        </LocalizationProvider>

        <TextField
          id="todo"
          name="todo"
          label="Task"
          variant="outlined"
          sx={{ width: '100%' }}
        />

        <Button
          variant="text"
          type="submit"
          sx={{ width: { xs: '100%', md: 'auto' } }}
        >
          Add
        </Button>
      </Stack>
    </Box>
    );
  }

  export default ToDoForm;