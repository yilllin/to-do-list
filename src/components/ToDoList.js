import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { List,ListItem,ListItemIcon } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import dayjs from 'dayjs';

function Item({ item, todos, setTodos}) {
  // edit
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);
  const handleEdit = () => {
    setEditing(true);
  };
  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);
  const handleInpuSubmit = (e) => {
    e.preventDefault();
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
    setEditing(false);
  };
  const handleInputBlur = () => {
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
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
    var confirm = window.confirm('確認刪除?');
    if(confirm){
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
      const updatedTodos = JSON.stringify(
        todos.filter((todo) => todo.id !== item.id)
      );
      localStorage.setItem("todos", updatedTodos);
    }
  };

  const formattedDatetime = item?.datetime ? dayjs(item.datetime).format('YYYY-MM-DD HH:mm:ss') : 'No Date';

  return (
    <ListItem key={item.id} sx={{ display: 'list-item' }}>
      {editing ? (
        <Box
          component="form"
          sx={{ 
            '& > :not(style)': { m: 1, width: '36ch' } ,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleInpuSubmit}
        >
          <Grid container spacing={1}>
            <Grid item size={2}>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
            </Grid>
            <Grid item size={6}>
              <TextField
                inputRef={inputRef}
                type="text"
                name="edit-todo"
                id="edit-todo"
                defaultValue={item?.title}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                label="Edit Task"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item size="auto">
              <IconButton onClick={handleInputChange}>
                <DoneIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{ 
            '& > :not(style)': { m: 1, width: '36ch' } ,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid 
            container 
            spacing={1}
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Grid item size={2}>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
            </Grid>
            <Grid item size={6}>
              <Typography sx={{ mt: 2, mb: 2 }} variant="body1">
                {item?.title}
              </Typography>
              <Typography sx={{ mt: 2, mb: 2 }} variant="caption">
                {formattedDatetime}
              </Typography>
              
            </Grid>
            <Grid item size="auto">
              <Tooltip title="Edit">
                <IconButton onClick={handleEdit}>
                  <EditNoteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      )}
    </ListItem>
  );
}

function ToDoList({ todos, setTodos }) {
  return (
    <List className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => 
        <Item key={index} item={item} todos={todos} setTodos={setTodos}/>
      )) : (
        <Typography sx={{ mt: 2, mb: 2 }} variant="body1">
          Empty
        </Typography>
      )}
    </List>
  );
}
export default ToDoList;