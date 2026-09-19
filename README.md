# PixelSketch: Art at Your Fingertips

**PixelSketch** is a browser-based pixel drawing application that blends the creativity of a digital sketchpad with the nostalgic charm of an Etch A Sketch. Draw freely on a customizable grid, experiment with colors, and export your artwork — all without any installation required.

🔗 **[Try it live!](https://rommjames.github.io/pixel-sketch/)**

<img width="969" height="614" alt="pixel-sketch-thumbnail" src="https://github.com/user-attachments/assets/87c1c1a0-d3b1-4aa9-aaf8-76229c5cf450" />

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Structure and layout of the application |
| **CSS3** | Styling, responsive design, and UI components |
| **JavaScript (Vanilla)** | Core drawing logic, event handling, and interactivity |
| **html2canvas** (v1.4.1) | Capturing the sketch grid and exporting it as a PNG image |

---

## ✨ Features

- **Hover & Draw** — On desktop, hover over the grid to paint pixels instantly. Left-click drawing is also supported. On mobile, touch the screen to create.
- **Color Customization** — Pick any color with the built-in color picker to personalize your drawings.
- **Rainbow Mode** — Activate a vibrant mode that randomly shifts colors as you draw for a dynamic, psychedelic effect.
- **Eraser Mode** — Precisely erase areas of your artwork without clearing the whole canvas.
- **Clear Button** — Wipe the entire sketch area with a single click to start fresh.
- **Customizable Grid** — Default 16×16 grid with a slider to resize up to 100×100 for highly detailed pixel art.
- **Download Your Artwork** — Export your finished drawing as a PNG file via the Download button.
- **Collapsible Settings Panel** — Hide or show the control panel to maximize your drawing area.
- **Keyboard Shortcuts** — Speed up your workflow with hotkeys:

  | Key | Action |
  |-----|--------|
  | `1` | Hover Mode |
  | `2` | Click Mode |
  | `3` | Activate Brush Color |
  | `4` | Open Color Picker |
  | `Q` | Eraser Mode |
  | `W` | Clear Sketch Area |
  | `E` | Rainbow Brush |
  | `A` | Hide / Show Setting Panel |
  | `S` | Download Sketch |

---

## 🚀 Getting Started

No installation needed! Simply open `index.html` in your browser, or visit the [live demo](https://rommjames.github.io/pixel-sketch/).

```bash
# Clone the repository
git clone https://github.com/RommJames/pixel-sketch.git

# Open in your browser
open index.html
```

---

## 📁 Project Structure

```
pixel-sketch/
├── index.html        # Main HTML entry point
├── favicon.ico       # Site favicon
└── src/
    ├── script.js     # Application logic and drawing engine
    └── styles.css    # Styling and layout
```

---

> **Note:** Local storage is not yet implemented — be sure to download your artwork before closing the tab!
