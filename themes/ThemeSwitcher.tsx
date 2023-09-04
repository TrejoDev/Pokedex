import { Button } from "@nextui-org/react";
import {useTheme} from "next-themes";


export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button 
        color="primary"
        variant="ghost" 
        onClick={() => setTheme('light')}
        style={{
          padding: '10px',
          marginRight: '5px',
          marginTop: '5px'

        }}
        >
          Light Mode
      </Button>
      <Button 
        color="secondary" 
        variant="ghost"
        onClick={() => setTheme('dark')}
        style={{
          padding: '10px',
          marginRight: '5px',
          marginTop: '5px'
        }}
        >
          Dark Mode
      </Button>
    </div>
  )
};