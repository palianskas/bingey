import {
  createMuiTheme,
  colors,
  ThemeProvider,
  Paper,
} from '@material-ui/core';

import { NavigationAppBar } from 'components/Navigation/Appbar/Appbar';

export const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: colors.indigo[400],
        main: colors.indigo[600],
        dark: colors.grey[800],
      },
      secondary: {
        light: colors.grey[300],
        main: colors.grey[400],
        dark: colors.grey[500],
      },
    },
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: colors.grey[900],
          color: 'white',
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <header>
        <NavigationAppBar title='Bingey' />
      </header>
    </ThemeProvider>
  );
};
