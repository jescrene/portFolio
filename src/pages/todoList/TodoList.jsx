import React from 'react';
import {Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
import useTodoList from './useTodoList';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const useStyles = makeStyles({
  container: {
    padding: '20px',
  },
  buttons: {
    marginTop: '10px',
    marginBottom: '20px',
  },
});

/**
 * TodoList component manages and displays the list of tasks.
 *
 * The component integrates the following functionalities:
 * - Adding a new task
 * - Deleting an existing task
 * - Editing an existing task
 * - Toggling the completion status of a task
 * - Filtering tasks to show only completed or only pending tasks
 *
 * It utilizes the following custom hooks and methods from useTodoList:
 * - task: The current task input value.
 * - setTask: Function to update the task input value.
 * - addTask: Function to add a new task to the list.
 * - deleteTask: Function to delete a task from the list.
 * - editTask: Function to edit an existing task in the list.
 * - toggleTaskCompletion: Function to toggle the completion status of a task.
 * - toggleShowCompleted: Function to toggle the visibility of completed tasks.
 * - filteredTasks: A list of tasks filtered based on the current visibility setting.
 * - editIndex: The index of the task currently being edited.
 * - showCompleted: Boolean value indicating if completed tasks are visible.
 */

const TodoList = () => {
  const classes = useStyles();
  const {
    task,
    setTask,
    addTask,
    deleteTask,
    editTask,
    toggleTaskCompletion,
    toggleShowCompleted,
    filteredTasks,
    editIndex,
    showCompleted,
  } = useTodoList();

  return (
    <div className={classes.container}>
      <TaskInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        editIndex={editIndex}
      />
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={toggleShowCompleted}
        >
          {showCompleted ? 'Mostrar Pendientes' : 'Mostrar Completadas'}
        </Button>
      </div>
      <TaskList
        filteredTasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoList;
