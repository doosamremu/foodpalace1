import { defineConfig } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind scans these files for class names
  ],
  theme: {
    extend: {},
  },
 
  }

