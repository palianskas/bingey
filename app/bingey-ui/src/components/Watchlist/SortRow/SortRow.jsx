import React, { useState } from 'react';
import './SortRow.scss';
import {
  ButtonGroup,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import IconButton from '@material-ui/core/IconButton';

export const SortRow = ({ sorters, onActiveSorterChange }) => {
  const [direction, setDirection] = useState('desc');
  const [activeSorter, setActiveSorter] = React.useState('');

  const handleChange = (event) => {
    setActiveSorter(event.target.value);
    onActiveSorterChange(event.target.value, direction);
  };

  const onDirectionChange = () => {
    if (direction === 'asc') {
      setDirection('desc');
      onActiveSorterChange(activeSorter, 'desc');
    } else {
      setDirection('asc');
      onActiveSorterChange(activeSorter, 'asc');
    }
  };

  return (
    <Card className={'sort-container'}>
      <FormControl className={'sort-input'} variant='outlined'>
        <InputLabel id='demo-simple-select-outlined-label'>Sort By</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          label='Sort By'
          value={activeSorter}
          renderValue={(selected) => selected.name}
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {sorters.map((sorter) => (
            <MenuItem key={sorter.id} value={sorter}>
              {sorter.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <IconButton
        aria-label='delete'
        size='medium'
        onClick={() => {
          onDirectionChange();
        }}
      >
        <ArrowDownwardSharpIcon className={direction} fontSize='default' />
      </IconButton>
    </Card>
  );
};
