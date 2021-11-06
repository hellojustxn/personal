#!/bin/bash

npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npm install @craco/craco

touch craco.config.js

echo "module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
" > craco.config.js

echo "TODO: Add \"purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],\" to tailwind.config.js"

# Create tailwind config
npx tailwindcss-cli@latest init

# Add Tailwind styles to index.css
echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > ./src/index.css