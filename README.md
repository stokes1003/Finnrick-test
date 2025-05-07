# FinnrickWidget

A React + Tailwind embeddable widget for displaying Finnrick product ratings. This widget is designed for easy integration on third-party sites (such as WooCommerce product pages) and faithfully renders the Finnrick brand identity.

## Features

- Responsive design: desktop and mobile layouts
- Displays vendor, product, rating, sample count, and last test date
- Finnrick logo and brand styling (with a mock useEffect for getting the logo included)
- Mock API: pass a `productId` prop to display different product data
- Easy to embed and customize

## Recommended Distribution Approach

To ensure the FinnrickWidget is easy to publish, always up-to-date, and maintains brand identity, we recommend the following approach:

### 1. Easy for Third-Party Site Owners

- **Script Tag Embed:** Distribute the widget as a single JavaScript bundle hosted on a CDN. Site owners can add it to their site with a simple `<script src="https://cdn.finnrick.com/widget.js"></script>` and a placeholder `<div id="finnrick-widget" data-product-id="123"></div>`.
- **No Build Step:** No need for site owners to install dependencies or build anything; just copy and paste.
- **Widget Configurator:** Optionally, provide a web-based configurator to generate the embed code for each product.

### 2. Up-to-Date Ratings

- **Live API Fetch:** The widget fetches product rating data from the Finnrick API at runtime, using the `productId` from the placeholder div or script tag.
- **Automatic Updates:** Any changes to ratings on Finnrick are reflected instantly on all third-party sites using the widget.

### 3. Faithful Brand Identity

- **Scoped Styles:** Bundle all CSS (e.g., Tailwind) with the widget, or use a Shadow DOM to prevent style conflicts with the host site.
- **Bundled Logo:** Include the Finnrick logo and all assets in the widget bundle.
- **Consistent Design:** The widget renders exactly as designed, regardless of the host site's theme or CSS.

This approach ensures the widget is easy to use, always accurate, and always on-brand.

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
