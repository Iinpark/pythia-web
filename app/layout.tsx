'use client';

import React from 'react';
import Container from '@mui/material/Container';
import List from '@widgets/LaunchesList/ui/List';
import Drawer from '@widgets/LaunchesList/ui/Drawer';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import '@shared/ui/Scrollbar/scrollbar.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            // 5 mins
            staleTime: 1000 * 60 * 5,
          },
        },
      })
  );

  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <Container maxWidth={false} sx={{ overflow: 'hidden' }}>
              <Grid container spacing={2}>
                <Grid item md={3} xs={0}>
                  <Hidden mdDown>
                    <List />
                  </Hidden>
                  <Hidden mdUp>
                    <Drawer />
                  </Hidden>
                </Grid>
                <Grid item md={9} xs={12}>
                  {children}
                </Grid>
              </Grid>
            </Container>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
