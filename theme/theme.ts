import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import lightThemeOptions from './lightThemeOptions'

// Create a theme instance.
const theme = responsiveFontSizes(createTheme(lightThemeOptions))

export default theme
