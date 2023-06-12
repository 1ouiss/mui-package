# New theme and design token

This new theme is designed to have different mode (ade, esd, esp, eac...)

## Structure

```bash
├── src/newTheme
│   ├── theme.ts
│   ├── types.ts
│   ├── Provider.tsx
│   ├── Components
│   │   ├── component.ts
│   │   ├── dataDisplay.ts
│   │   ├── global.ts
│   │   ├── inputs.ts
│   │   ├── layout.ts
│   ├── Palette
│   │   ├── createPalette.ts
│   │   ├── utils.ts
│   ├── Typography
│   │   ├── createTypography.ts
│   │   ├── typographyImports.ts
│   │   ├── utils.ts
│
│   ├── README.md
```

## Create `Themes` type in `src/newTheme/types.ts`

This type is used to create the different mode of the theme, if you want add new mode, mode here for use in app.

```ts
enum Themes {
  ADE = 'ade',
  ESP = 'esp',
  // add new mode
}
```

## How to use it

### Import theme in your app

To use the theme you need to import the provider and wrap your app with it.

```tsx
import { useTheme } from '@store/theme';

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  // get theme from store
  const [theme] = useTheme();

  // here you can change the theme
  return <ThemeProvider theme={newTheme(theme)}>{children}</ThemeProvider>;
}
```

### Import theme in your app

```tsx
import { CustomThemeProvider } from 'src/newTheme/Provider';

const App = () => {
  return (
    <CustomThemeProvider>
      <div>My app</div>
    </CustomThemeProvider>
  );
};
```

### Declare new color in your component

If you want use a new color in your component, you can declare new color for your component in file `src/nexTheme/theme.ts`

```tsx
// create ovverides style for your component
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // declare new color here
    color1: true;
  }
}
```

### Use the theme in your component

To use the theme in your component mui component

```tsx
// import mui component
import { Button } from '@mui/material';

const MyComponent = () => {
  // use theme here
  return <Button color="color1">My component</Button>;
};
```

### Use the theme in your component with sx

To use the theme in your component with sx

```tsx
// import mui component
import { Button } from '@mui/material';

const MyComponent = () => {
  return (
    <Button
      sx={{
        // use theme here
        color: 'color1',
      }}
    >
      My component
    </Button>
  );
};
```

### Use the theme in sx with `useTheme`

To use the theme in your component you need to import the hook `useTheme` and use it.

```tsx
// import useTheme from mui
import { useTheme } from '@mui/material';

const MyComponent = () => {
  // create theme const for use it
  const theme = useTheme();

  return (
    <Box
      sx={{
        // use theme here
        backgroundColor: theme.palette.primary.main,
      }}
    >
      My component
    </Box>
  );
};
```

### Use the theme in sx with `useTheme` and `callback`

To use the theme in your component you need to import the hook `useTheme` and use it.

```tsx
// import useTheme from mui
import { Theme, useTheme } from '@mui/material';

const MyComponent = () => {
  // create theme const for use it
  const theme = useTheme();

  // use theme here
  // type your theme with mui type
  return (
    <Box
      sx={{
        backgroundColor: (theme: Theme) => theme.palette.primary.main,
      }}
    >
      My component
    </Box>
  );
};
```

## `StyledTabs` & `StyledTab`

Components `StyledTabs` & `StyledTab` are remplaced by `MuiTabs` & `MuiTab` in `src/StyledTabs/index.ts`
