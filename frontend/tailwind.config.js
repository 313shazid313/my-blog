/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // dark mode
        "electric-blue": "#7DF9FF",
        "drak-gray": "#1e1e1e",
        "dark-mode-font":"#E0E0E0",
        // light mode
        "light-gray":"#F8F9FA",
        "tale":"#00B5AD",
        "light-mode-font":"#333333"
      },
    },
  },
  plugins: [],
};

// https://www.color-hex.com/
// 1. **Dark Mode**:
//    - **Primary Color**: Dark gray or black (#121212 or #1e1e1e)
//    - **Accent Color**: Electric blue (#007BFF) or neon green (#00FF00) for highlights and links
//    - **Text Color**: Light gray or white (#E0E0E0)

// 2. **Light Mode**:
//    - **Primary Color**: Light gray or white (#F8F9FA)
//    - **Accent Color**: Navy blue (#0056D2), teal (#00B5AD), or dark orange (#FF8C00)
//    - **Text Color**: Dark gray or black (#333333)

// 3. **Modern Tech**:
//    - **Primary Color**: Cool blue (#1A73E8) or cyan (#00BCD4)
//    - **Secondary Color**: Muted purple (#673AB7) or vibrant yellow (#FFEB3B)
//    - **Background**: White or light gray (#F0F0F0)
