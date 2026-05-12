import type { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Your theme override here */
});

export const App = (): JSX.Element => (
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
);
