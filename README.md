# FinnrickWidget

A React + Tailwind embeddable widget for displaying Finnrick product ratings. This widget is designed for easy integration on third-party sites (such as WooCommerce product pages) and faithfully renders the Finnrick brand identity.

## Features

- Responsive design: desktop and mobile layouts
- Displays vendor, product, rating, sample count, and last test date
- Finnrick logo and brand styling (with a mock useEffect for getting the logo included)
- Mock API: pass a `productId` prop to display different product data
- Easy to embed and customize

## Usage

### In Your App

```tsx
import { FinnrickWidget } from "./components/FinnrickWidget";

function App() {
  return <FinnrickWidget productId="123" />;
}
```

### Props

- `productId` (string): The ID of the product to display. The widget will look up mock data for this ID.

## Mock Data

The widget uses a mock data map in `FinnrickWidget.tsx` to simulate fetching product info from an API. You can add more products to this map for testing.

## Development

1. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
2. Start the dev server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```
3. Edit the widget or add new mock products as needed.

## Customization

- To use real API data, replace the mock data lookup with an API call.
- The widget is styled with Tailwind CSS and is easy to restyle or extend.

## License

MIT
