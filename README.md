# Shopping Cart Application

A responsive React TypeScript shopping cart application with multi-language support and accessibility features.

## Features

- Responsive design for mobile and desktop views
- Multi-language support (English, German, French)
- Product management with add/remove functionality
- Accessibility compliant

## Live Demo

The application is hosted at: [https://shopping-cart-gr6o.onrender.com](https://shopping-cart-gr6o.onrender.com)

## Screenshots

### Desktop View
![Desktop View](/reports/desktop.png)

### Mobile View
![Mobile View](/reports/mobile.png)

### Accessibility Testing
![Accessibility Test Results](/reports/Accessibility_report.png)

## Project Structure

The project follows a clean, component-based architecture:

```
src/
├── components/          # Reusable UI components
│   ├── Footer/          # Language selector and reset functionality
│   ├── Header/          # Cart summary header
│   ├── ProductCard/     # Individual product display
│   └── Products/        # Product grid container
├── pages/               # Application pages
│   └── Cart/            # Main cart page
├── data/                # API and data handling
└── types/               # TypeScript type definitions
```

## Getting Started

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Start the development server
   ```
   npm run dev
   ```
4. Build for production
   ```
   npm run build
   ```

## Testing

Run the test suite:
```
npm test
```

Or in watch mode:
```
npm run test:watch
```

## Internationalization

The application supports multiple languages:
- English (default)
- German
- French

Language can be changed using the selector in the footer.

## Accessibility

This application has been tested for accessibility compliance and meets WCAG standards, as shown in the accessibility test report.