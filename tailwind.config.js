/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
 
  plugins: [
    nextui({
      layout: {}, // common layout options
      themes: {
        light: {
          layout: {}, // light theme layout options
          // ...
        },
        dark: {
          layout: {}, // dark theme layout options
          // ...
        },
        // ... custom themes
        
      },
    }),
  ],
}
