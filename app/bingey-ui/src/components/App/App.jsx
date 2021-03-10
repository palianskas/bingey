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
      // grey seems to work best, but color makes it pop more
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

  // technically should set colors to default dark theme. doesnt work
  // const theme = createMuiTheme({
  //   palette: {
  //     type: 'dark',
  //   },
  // });

  return (
    <ThemeProvider theme={theme}>
      <header>
        <NavigationAppBar title="Bingey" />
      </header>
    </ThemeProvider>
  );
};
