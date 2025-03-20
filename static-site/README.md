# INII.tech Static Website

This is a static version of the INII.tech website. It is designed to be completely static, with no server-side dependencies, meaning it can be opened simply by opening the `index.html` file in a browser.

## Features

- Pure HTML, CSS, and JavaScript implementation
- No server-side dependencies
- All animations and interactive elements preserved
- Maintains the same layout, style, and design as the original website

## How to Use

1. Simply open the `index.html` file in your web browser. 
2. All assets are included in the `public` directory.

## File Structure

- `index.html` - The main HTML file
- `styles.css` - All styles for the website
- `script.js` - JavaScript for interactivity and animations
- `public/` - Directory containing all static assets (images, fonts, etc.)

## Setup Instructions

If you're setting this up from the original Next.js project, follow these steps:

1. Make sure you have all the files in place: `index.html`, `styles.css`, and `script.js`
2. Run the `copy-assets.sh` script to copy the necessary assets from the original project:
   ```
   chmod +x copy-assets.sh
   ./copy-assets.sh
   ```
3. Open `index.html` in your browser to view the website

## Browser Support

This website is designed to work in all modern browsers. For the best experience, please use the latest version of Chrome, Firefox, Safari, or Edge.

## Credits

Created by INII Tech - A technology company dedicated to developing high-quality iOS and macOS applications.
