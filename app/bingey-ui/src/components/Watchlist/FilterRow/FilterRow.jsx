import React, { useState } from 'react';
import './FilterRow.scss';
import {
  ButtonGroup,
  Card,
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';

export const FilterRow = ({ filters, valuesToFilter, onFiltersChange }) => {
  const [selectedValues, setSelectedValues] = React.useState([
    {
      field: '',
      value: '',
    },
  ]);

  const handleChange = (event, filter) => {
    const arr = [];
    event.target.value.map((val) => {
      arr.push({
        field: filter.id,
        value: val,
      });
    });
    setSelectedValues(arr);
    onFiltersChange(arr);
  };

  const getCurrentValue = (filterId) => {
    const arr = [];
    selectedValues.map((obj) => {
      if (obj.field === filterId) {
        arr.push(obj.value);
      }
    });
    return arr;
  };

  const getFilterValues = (filter) => {
    const allValues = [];
    valuesToFilter?.map((value) => {
      if (value[filter.id]) {
        allValues.push(...value[filter.id]);
      }
    });

    return allValues;
  };

  return (
    <Card className={'filter-container'}>
      <Typography className='filter-explainer' gutterBottom>
        Filters
      </Typography>
      {filters.map((filter) => (
        <FormControl
          key={filter.id}
          className={'filter-input-container'}
          variant='outlined'
        >
          <InputLabel id='mutiple-checkbox-label'>{filter.name}</InputLabel>
          <Select
            labelId='mutiple-checkbox-label'
            id='demo-mutiple-checkbox'
            multiple
            value={getCurrentValue(filter.id)}
            onChange={(e) => handleChange(e, filter)}
            renderValue={(selected) => selected.join(', ')}
            label={filter.name}
          >
            {getFilterValues(filter).length === 0 && filter.id !== 'isMovie' ? (
              <Typography align={'center'}>Nothing to show</Typography>
            ) : null}
            {filter.id !== 'isMovie' ? (
              getFilterValues(filter)?.map((value) => (
                <MenuItem key={value} value={value}>
                  <Checkbox
                    checked={getCurrentValue(filter.id).indexOf(value) > -1}
                  />
                  <ListItemText primary={value} />
                </MenuItem>
              ))
            ) : (
              <MenuItem key={'Movie'} value={'Movie'}>
                <Checkbox
                  checked={getCurrentValue(filter.id).indexOf('Movie') > -1}
                />
                <ListItemText primary={'Movie'} />
              </MenuItem>
            )}
          </Select>
        </FormControl>
      ))}
    </Card>
  );
};
