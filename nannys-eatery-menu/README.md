# menu-template

Dynamic restaurant menu template using plain HTML, CSS, and JavaScript.

## Quick start
1. Edit `restaurant-config.js`.
2. Open `menu.html` in your browser.

## Customize item media
Each menu item supports three media fields:

- `image`: small card image shown in the menu list.
- `modalImage`: large image shown after clicking an item.
- `video`: optional video shown in modal (takes priority over `modalImage`).

Example:

```js
{
  name: "Jerk Chicken",
  price: "NZ$26",
  image: "./assets/jerk-card.jpg",
  modalImage: "./assets/jerk-modal.jpg",
  video: "./assets/jerk.mp4"
}
```

### Using your own custom images
- Create an `assets/` folder in this repo.
- Add your image files (e.g. `assets/item1.jpg`).
- Reference them in `restaurant-config.js` using relative paths like `"./assets/item1.jpg"`.

Tip: Use card images around 900x900 and modal images around 1600x900 for best quality.
