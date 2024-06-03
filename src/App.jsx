import React, { useState, useEffect } from 'react';
import TodoForm from './comps/TodoForm';
import TodoList from './comps/TodoList';
import SearchBox from './comps/SearchBox';
import { Container, Typography, Paper, Box } from '@mui/material';
import './App.css';

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return storedTasks;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, {...task, id: Date.now() }]);
  };

  const saveTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id!== taskId));
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchString.toLowerCase()) ||
    task.description.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0'
      }}
    >
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          My Todos
        </Typography>
        <Box sx={{ mb: 3 }}>
          <SearchBox searchString={searchString} setSearchString={setSearchString} />
        </Box>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
          <TodoForm addTask={addTask} />
        </Paper>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2, maxHeight: '400px', overflowY: 'auto' }}>
          <TodoList tasks={filteredTasks} saveTask={saveTask} deleteTask={deleteTask} />
        </Paper>
      </Container>
    </Box>
  );
};

export default App;