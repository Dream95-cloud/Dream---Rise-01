import React, { createContext, useContext, useMemo } from 'react';
import { COLORS, SPACING, RADIUS } from './tokens';
import { ViewStyle, TextStyle } from 'react-native';

type Theme = {
  colors: typeof COLORS;
  spacing: typeof SPACING;
  radius: typeof RADIUS;
  styles: {
    card: ViewStyle;
    headerTitle: TextStyle;
  };
};

function makeDefaultTheme(): Theme {
  return {
    colors: COLORS,
    spacing: SPACING,
    radius: RADIUS,
    styles: {
      card: {
        backgroundColor: COLORS.surface,
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: COLORS.border
      },
      headerTitle: {
        color: COLORS.textPrimary,
        fontSize: 20,
        fontWeight: '700'
      }
    }
  };
}

const ThemeContext = createContext<Theme>(makeDefaultTheme());

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Memoize theme object so consumers don't re-render unnecessarily
  const theme = useMemo(() => makeDefaultTheme(), []);
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
