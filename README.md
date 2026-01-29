# ᚱ Cistercian Rune Generator

A modern, accessible React application that converts decimal numbers (0-9999) into their medieval **Cistercian Runic** representation.

## 🚀 Features

- **Real-time Conversion:** Instantly generates a rune as you type.
- **Dynamic SVG Rendering:** Mathematically constructed runes using a single-source-of-truth logic for shapes.
- **Downloadable Assets:** One-click SVG export for the generated rune.
- **A11y Focused:** Full screen-reader support and keyboard navigation.
- **Modern UI:** Minimalist design built with Tailwind CSS, featuring a responsive layout.

## 🛠 Tech Stack

- **React** (Functional Components, Hooks, Context-API)
- **Tailwind CSS** (Styling & Animations)
- **SVG** (Scalable Vector Graphics for rune generation)

## 🧠 The Logic Behind the Runes

The application follows the Cistercian numeral system, which uses a single vertical stem as a base. The number is split into four quadrants:

- **Upper Right:** Units (1-9)
- **Upper Left:** Tens (10-90) — mirrored horizontally
- **Lower Right:** Hundreds (100-900) — mirrored vertically
- **Lower Left:** Thousands (1000-9000) — mirrored both ways

Instead of hardcoding 40 different shapes, this app uses **geometric transformations** (`scale`, `translate`) on a base set of 9 digit paths, ensuring the code is DRY (Don't Repeat Yourself) and easy to maintain.

## ♿ Accessibility & UX

- **Focus Management:** The input field is automatically focused on page load for immediate interaction.
- **Keyboard Friendly:** Fully navigable via Tab and Enter keys.

## 📥 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BigEm44/runes-conventer.git
   ```
