import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import '@shared/ui/Scrollbar/scrollbar.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Setup react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // 5 mins
      staleTime: 1000 * 60 * 5,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const theme = extendTheme();
delete theme.colorSchemes.light;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssVarsProvider
        theme={theme}
        defaultColorScheme={'dark'}></CssVarsProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
