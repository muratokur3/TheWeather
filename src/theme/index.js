import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FAFAFA',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: '"Nunito", sans-serif',
    h1: {
      fontSize: '6.0rem', // 96px
      fontWeight: 800,
      lineHeight: 1.2, // %120
    },
    h2: {
      fontSize: '3.0rem', // 48px
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.25rem', // 36px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem', // 24px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.0rem', // 16px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '0.875rem', // 14px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1.25rem', // 20px
      fontWeight: 400,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.0rem', // 16px
      fontWeight: 400,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.4,
    },
    button: {
      fontSize: '0.75rem', // 12px
      fontWeight: 700, // Regular & Bold
      lineHeight: 1.4,
    },
    // Diğer tipografi ayarları...
  },
});

export default theme;
