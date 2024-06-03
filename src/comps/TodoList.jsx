import React from 'react';
import TodoItem from './TodoItem';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TodoList = ({ tasks, saveTask, deleteTask }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(task => (
            <TodoItem 
              key={task.id} 
              task={task} 
              saveTask={saveTask} 
              deleteTask={deleteTask} 
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoList;
