import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App'
import './index.css'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const theme = extendTheme()
delete theme.colorSchemes.light

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <CssVarsProvider theme={theme} defaultColorScheme={'dark'}></CssVarsProvider>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
