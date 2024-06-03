import React, { useState } from 'react';
import { TableRow, TableCell, TextField, Button } from '@mui/material';

const TodoItem = ({ task, saveTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleSave = () => {
    saveTask({ ...task, title: editTitle, description: editDescription });
    setIsEditing(false);
  };

  return (
    <TableRow>
      {isEditing ? (
        <>
          <TableCell>
            <TextField 
              value={editTitle} 
              onChange={(e) => setEditTitle(e.target.value)} 
              fullWidth 
            />
          </TableCell>
          <TableCell>
            <TextField 
              value={editDescription} 
              onChange={(e) => setEditDescription(e.target.value)} 
              fullWidth 
              multiline 
              rows={2} 
            />
          </TableCell>
          <TableCell>
            <Button onClick={handleSave} variant="contained" color="primary" sx={{ mr: 1 }}>
              Save
            </Button>
            <Button onClick={() => setIsEditing(false)} variant="contained" color="secondary">
              Cancel
            </Button>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>{task.title}</TableCell>
          <TableCell>{task.description}</TableCell>
          <TableCell>
            <Button onClick={() => setIsEditing(true)} variant="contained" color="primary" sx={{ mr: 1 }}>
              Edit
            </Button>
            <Button onClick={() => deleteTask(task.id)} variant="contained" color="secondary">
              Delete
            </Button>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default TodoItem;
