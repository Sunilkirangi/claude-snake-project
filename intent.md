# Aether Snake – Browser Game Intent

## Outcome

A playable browser-based Snake game built in plain HTML, CSS, and JavaScript. Players enter a nickname and select an avatar on a start screen, then play classic Snake (move, eat food to grow, die on collision). The game displays live score, and when the snake dies, shows final stats with a "Play Again" button to restart.

## Done When

1. **Start screen works**: User can type a nickname, select an avatar from a preset list, and click a button to begin the game
2. **Gameplay works**: Snake moves smoothly with keyboard controls, eats food, grows, and dies on wall/self collision; score updates in real-time
3. **Game over screen works**: When the snake dies, the screen shows final score and nickname with avatar, and a "Play Again" button returns to the start screen

## Boundaries

- **No external dependencies**: Plain HTML, CSS, JavaScript only (no libraries, frameworks, CDNs)
- **No personal data stored**: Nickname and avatar choice are session-only (not saved to disk or server)
- **No outside links**: Game is entirely self-contained (no social media buttons, ads, or external resources)
- **No file uploads**: Avatar selection is from a predefined list only
- **No server required**: Runs entirely in the browser

## Open Questions

- How many preset avatar options should there be? (e.g., 5 colors, 5 emojis, etc.)
- What should the game board size be? (e.g., 20×20 grid, 400×400 pixels)
- What speed should the snake move at? (e.g., medium, configurable)
- Should pressing arrow keys while playing wrap around, or is collision with walls a loss?
