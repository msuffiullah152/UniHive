import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark', // Set the theme type to dark
    primary: {
      main: '#FBCB1C',//dark grayblue 1B1D21
    },
    secondary: {
      main: '#FBCB1C',
    },
    text: {
      primary: '#FFF',
      secondary: '#666',
    },
  },
  
  // Add more theme configurations if needed
});

export default theme;
