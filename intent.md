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

## Feature: Levels 2–5 (Progressive Difficulty)

### Outcome

After finishing level 1, players progress to levels 2–5, each incrementally harder. Difficulty increases through snake speed and/or food spawn behavior, but every level remains winnable and fully playable. Players see their current level during gameplay and can advance to the next level by reaching a target score threshold.

### Done When

1. **Level progression works**: After reaching a score threshold on level 1, the game automatically advances to level 2; same for levels 2→3, 3→4, 4→5
2. **Difficulty increases**: Each level is measurably harder than the previous (e.g., faster snake speed, more challenging food patterns, or denser obstacles) while remaining playable
3. **Level display**: Players see the current level (1–5) clearly on the game screen at all times
4. **Level 5 is endgame**: After winning level 5 (reaching its score threshold), the game displays a victory screen with final stats (level, total score, nickname, avatar) and a "Play Again" button to restart at level 1
5. **Always playable**: Every level must be winnable within reasonable effort; no impossible difficulty spikes

### Boundaries

- **Scope is 5 levels only**: No level editor, custom levels, or infinite progression
- **No permanent persistence**: Level progress is session-only (lost on page refresh); no saving to disk
- **Difficulty is mechanical only**: Speed and spawn patterns only; no new game mechanics or power-ups
- **Same board size**: All levels use the same 20×20 grid (or whatever is chosen for level 1)
- **Single difficulty path**: No selectable difficulty modes; levels scale automatically and linearly

## Open Questions

- How many preset avatar options should there be? (e.g., 5 colors, 5 emojis, etc.)
- What should the game board size be? (e.g., 20×20 grid, 400×400 pixels)
- What speed should the snake move at on level 1? (e.g., medium, configurable)
- Should pressing arrow keys while playing wrap around, or is collision with walls a loss?
- What score threshold triggers level advancement? (e.g., 100 points = level 2, 200 = level 3, etc.)
- How should difficulty scale per level? (e.g., speed increase only, or also food spawn patterns)
