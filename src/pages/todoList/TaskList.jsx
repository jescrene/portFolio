import React from 'react';
import {makeStyles} from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material';

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
});

/**
 * TaskList component represents a list of tasks with functionality to complete,
 * edit, and delete each individual task.
 *
 * @param {Object} props
 * @param {Array} props.filteredTasks - Array of filtered tasks to be displayed.
 * @param {Function} props.toggleTaskCompletion - Function to toggle the completion status of a task.
 * @param {Function} props.editTask - Function to edit a specific task.
 * @param {Function} props.deleteTask - Function to delete a specific task.
 * @returns {JSX.Element} A list of tasks with accompanying control buttons.
 */

const TaskList = ({
  filteredTasks,
  toggleTaskCompletion,
  editTask,
  deleteTask,
}) => {
  const classes = useStyles();

  return (
    <List>
      {filteredTasks.map((task, index) => (
        <ListItem key={index} className={classes.listItem}>
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
          />
          <ListItemText primary={task.text} />
          <Button
            onClick={() => editTask(index)}
            variant="outlined"
            color="primary"
            edge="end"
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteTask(index)}
            variant="outlined"
            color="secondary"
            edge="end"
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
