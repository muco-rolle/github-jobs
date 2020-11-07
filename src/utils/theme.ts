import { DefaultTheme } from 'styled-components';
import { theme } from 'theme';

interface Theme {
    theme: DefaultTheme;
}

export const color = (colorName: keyof typeof theme.palette) => (
    props: Theme
) => props.theme.palette[colorName] || colorName;
