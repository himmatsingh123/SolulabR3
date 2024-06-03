import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addTask({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField 
        label="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        fullWidth 
        required 
        sx={{ mb: 2 }}
      />
      <TextField 
        label="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        fullWidth 
        multiline 
        rows={4} 
        required 
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Task
      </Button>
    </Box>
  );
};

export default TodoForm;
