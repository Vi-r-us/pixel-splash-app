# PixelSplash

PixelSplash is a one-stop search page for discovering images with a dark and light theme switcher. It boasts a fantastic modern UI and leverages the Unsplash API to provide users with high-quality images.

## Technologies Used

- React
- Vite
- Axios
- react-query

## Features

- **Theme Switch:** Easily toggle between dark and light themes for a personalized browsing experience.
- **Image Search:** Search for images using specific keywords.
- **Dynamic Loading:** Load more images on-demand to explore a wide range of options.

### Future Additions

- **Image Download:** Coming soon! A download button will be added to enable users to save images directly.

### Elegant Grid and Flex Layout Algorithm

The algorithm for achieving an elegant-looking grid and flex layout based on screen sizes involves utilizing CSS media queries along with flexible CSS units like percentages or viewport units. Here's a simplified example:

```css
.Grid {
  display: grid;
  grid-template-columns: 1fr; /* Adjust based on your design */
}

@media screen and (min-width: 500px) {
  .Grid {
    grid-template-columns: 1fr 1fr; /* Two items per row on bigger screens */
  }
}

@media screen and (min-width: 769px) {
  .Grid {
    grid-template-columns: 1fr 1fr 1fr; /* Three item per row on even bigger screens */
  }
}
```

```html
<!-- For Mobile View -->
<Grid>
  <Flex />
</Grid>

<!-- For Tablet View -->
<Grid>
  <Flex />
  <Flex />
</Grid>

<!-- For Desktop View -->
<Grid>
  <Flex />
  <Flex />
  <Flex />
</Grid>
```

## Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/PixelSplash.git
```

2. Navigate to the project directory:

```bash
cd PixelSplash
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm start
```

5. Open your browser and visit `http://localhost:5173/pixel-splash-app/` to explore PixelSplash.

## Contributing

Contributions are welcome! Feel free to open an issue to report bugs or suggest improvements. Pull requests are also encouraged.
