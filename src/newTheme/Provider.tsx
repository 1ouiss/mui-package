import { ThemeProvider } from "@mui/material";

// import useTheme from '@/store/theme';

import { newTheme } from "./theme";

type CustomThemeProviderProps = {
  children: JSX.Element;
};
// declare module "@mui/material/styles" {
//   interface Theme {
//     palette: defaultTheme("ade");
// }

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  // const [theme] = useTheme();

  return <ThemeProvider theme={newTheme("ade")}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
