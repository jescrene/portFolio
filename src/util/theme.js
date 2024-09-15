import {ThemeProvider} from '@mui/styles';
import {createTheme} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
        },
        '*': {
          boxSizing: 'inherit',
        },
        h1: {
          color: '#333',
        },
        p: {
          lineHeight: 1.5,
        },
      },
    },
  },
});

export const withTheme = (Component) => (props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...props} />
  </ThemeProvider>
);

export default theme;
