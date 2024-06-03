import React from 'react';
import { TextField } from '@mui/material';

const SearchBox = ({ searchString, setSearchString }) => {
  return (
    <TextField 
      label="Search tasks..." 
      value={searchString} 
      onChange={(e) => setSearchString(e.target.value)} 
      fullWidth 
      sx={{ mb: 3 }}
    />
  );
};

export default SearchBox;
