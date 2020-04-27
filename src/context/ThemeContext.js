import { createContext } from 'react'
import { indigo } from '../components/theme/colors'

export const ThemeContext = createContext({
  primary: indigo[5]
});