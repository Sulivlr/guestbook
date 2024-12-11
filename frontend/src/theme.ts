import {createTheme} from '@mui/material';

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      }
    }
  },
  palette: {
    primary: {
      main: '#ff9800',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffcc80',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
      letterSpacing: 0.5,
    }
  }
});

export default theme;