import {useState} from 'react';

/**
 * Custom hook for managing a to-do list.
 *
 * This hook provides functionalities for adding, deleting, editing, and toggling the completion status of tasks.
 * It also supports filtering tasks based on their completion status.
 *
 * @return {Object} An object containing the following properties and functions:
 *   - `task`: {string} The current task input value.
 *   - `setTask(task: string)`: Function to update the task input value.
 *   - `addTask()`: Function to add a new task or update an existing task if in edit mode.
 *   - `deleteTask(index: number)`: Function to delete a task by index.
 *   - `editTask(index: number)`: Function to set the task for editing by index.
 *   - `toggleTaskCompletion(index: number)`: Function to toggle the completion status of a task by index.
 *   - `toggleShowCompleted()`: Function to toggle the display of completed tasks.
 *   - `filteredTasks`: {Array<object>} The list of tasks filtered based on their completion status.
 *   - `editIndex`: {?number} The index of the task being edited, or null if not in edit mode.
 *   - `showCompleted`: {boolean} Flag indicating whether completed tasks should be shown.
 */

const useTodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);

  const addTask = () => {
    if (editIndex !== null) {
      const updatedTasks = tasks.map((t, index) =>
        index === editIndex ? {...t, text: task} : t
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, {text: task, completed: false}]);
    }
    setTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? {...t, completed: !t.completed} : t
    );
    setTasks(updatedTasks);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTasks = tasks.filter(
    (task) => showCompleted || !task.completed
  );

  return {
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
  };
};

export default useTodoList;
