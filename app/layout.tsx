'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import '@shared/ui/Scrollbar/scrollbar.scss';
import '@app/main.scss';
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
              <Grid container spacing={0}>
                <Grid item md={12} xs={12}>
                  {children}
                </Grid>
              </Grid>
            </Container>
          </QueryClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
