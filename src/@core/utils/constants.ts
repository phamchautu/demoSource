import { Dimensions } from 'react-native';

const { width, height, fontScale } = Dimensions.get('window');

export const APP_THEME = 'light';

export const APP_PADDING = 16;

export const APP_WIDTH = width - APP_PADDING * 2;

export const WINDOW_WIDTH = width;

export const WINDOW_HEIGHT = height;

export const WINDOW_FONTSCALE = fontScale;