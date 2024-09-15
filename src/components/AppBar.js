import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Button, Typography} from '@mui/material';

/**
 * A functional component representing the application's top AppBar.
 *
 * The AppBar contains a set of buttons that navigate to different sections of the site,
 * including the home page, To-Do List, and Tic-Tac-Toe game.
 *
 * The buttons are styled consistently with a margin on the right side, and the title
 * is displayed with a flexible grow style to take available space.
 *
 * @variable {function} MyAppBar - A React component for the app's AppBar.
 */
const MyAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{flexGrow: 1}}>
        Mi Página Web
      </Typography>
      <Button
        color="inherit"
        component={Link}
        to="/"
        style={{marginRight: '10px'}}
      >
        Inicio
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/todolist"
        style={{marginRight: '10px'}}
      >
        To-Do List
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/tictactoe"
        style={{marginRight: '10px'}}
      >
        Tic-Tac-Toe
      </Button>
    </Toolbar>
  </AppBar>
);

export default MyAppBar;
