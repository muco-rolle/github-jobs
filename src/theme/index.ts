import { GeistUIThemes } from '@geist-ui/react';
import { palette } from './geist-palette';
import { font } from './geist-font';

export const GeistTheme = {
    palette,
    font,
} as GeistUIThemes;

export const theme = {
    ...GeistTheme,
};
