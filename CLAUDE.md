# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Aether Snake** is a browser-based Snake game built with plain HTML, CSS, and JavaScript. The game features a start screen where players enter a nickname and select an avatar, then play classic Snake (move, eat food, grow, avoid collisions). On game over, the final score is displayed with a restart option.

See `intent.md` for the full requirements and open questions.

## Architecture

### Frontend Structure
- **Single-file approach**: The game will be implemented in one HTML file (`index.html`) with embedded CSS and JavaScript
- **No external dependencies**: Pure vanilla JavaScript (no libraries or frameworks)
- **Game loop**: Uses `requestAnimationFrame()` for smooth animation
- **Screen management**: Three main screens managed by JS state:
  1. **Start Screen**: Nickname input + avatar selector
  2. **Game Screen**: Canvas-based rendering of snake, food, score display
  3. **Game Over Screen**: Final stats + restart button

### Core Game Logic
- **Game State**: Tracks snake position/direction, food location, score, game status
- **Rendering**: Canvas element for the game board
- **Input Handling**: Arrow keys for snake movement (keyboard event listeners)
- **Collision Detection**: Check snake head vs walls, food, and self

## Getting Started

### Run the Game
```bash
# Open the HTML file directly in a browser
open index.html
# or simply double-click the file
```

No build step, server, or dependencies needed.

### File Structure (When Complete)
```
aether-snake/
├── index.html          # Main game file (HTML + CSS + JS)
├── intent.md           # Project requirements and scope
├── CLAUDE.md           # This file
└── .git/
```

## Development Notes

- **Canvas rendering**: Game board is drawn as a grid using HTML5 Canvas API
- **Snake representation**: Array of coordinates representing body segments
- **Score calculation**: Typically +10 points per food eaten (length = score)
- **Preset avatars**: Should be simple (e.g., 5 color squares or 5 emoji options) displayed as player marker during gameplay
- **Vanilla JS best practices**: Use modern ES6+, but avoid minification until final release

## Testing

Since this is a browser game with no backend, manual testing in the browser is the primary approach:
1. Enter nickname and select avatar on start screen
2. Verify snake moves with arrow keys
3. Verify food appears and snake grows when eating
4. Verify game ends on collision (wall/self)
5. Verify "Play Again" returns to start screen

## Known Constraints

- No external libraries or CDNs
- No server or file I/O (session-only data)
- No personal data persistence
- Avatar selection from predefined list only
