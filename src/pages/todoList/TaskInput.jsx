import React, {useCallback} from 'react';
import {makeStyles} from '@mui/styles';
import {Button, TextField} from '@mui/material';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
});

/**
 * TaskInput component for creating or editing a task.
 *
 * @param {object} props - The component properties.
 * @param {string} props.task - The current task input value.
 * @param {Function} props.setTask - Function to update the task input value.
 * @param {Function} props.addTask - Function to add or edit a task.
 * @param {number|null} props.editIndex - Index of the task being edited, or null if adding a new task.
 * @returns {JSX.Element} The rendered component.
 */

const TaskInput = ({task, setTask, addTask, editIndex}) => {
  const classes = useStyles();
  const handleInputChange = useCallback(
    (e) => setTask(e.target.value),
    [setTask]
  );

  return (
    <div className={classes.container}>
      <TextField
        label="Nueva Tarea"
        value={task}
        onChange={handleInputChange}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        {editIndex !== null ? 'Editar' : 'Agregar'}
      </Button>
    </div>
  );
};

export default TaskInput;
