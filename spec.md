# Levels Specification

## Level File Format

Each level is a single JavaScript file at `levels/level-N.js` (where N is 1–5). The browser loads it with a `<script>` tag. Each file exports a `LEVEL` object containing all level configuration.

## Level Object Structure

```javascript
const LEVEL = {
  id: Number,              // Level number (1–5)
  name: String,            // Display name (e.g., "Level 1: Easy")
  foodToFinish: Number,    // How many foods must be eaten to advance
  startSnakeLength: Number, // Initial snake body length
  speed: Number,           // Movement delay in ms (lower = faster)
  obstacles: Array,        // Array of obstacle coordinates [[x,y], [x,y], ...]
}
```

## Field Constraints

### `foodToFinish`
- **Purpose**: Number of foods the player must eat to complete the level and advance
- **Minimum**: 5 (ensures meaningful gameplay, not trivial)
- **Maximum**: 25 (keeps level winnable in reasonable time)
- **Recommendation**: Level 1 = 10, Level 5 = 20

### `startSnakeLength`
- **Purpose**: Initial length of the snake (how many body segments at game start)
- **Minimum**: 2 (head + 1 body segment; less would be invalid)
- **Maximum**: 10 (consuming 5 foods could max out the board if length is too large)
- **Recommendation**: Level 1 = 3, Level 5 = 5

### `speed`
- **Purpose**: Milliseconds between snake movements (game tick interval)
- **Minimum**: 80 (fast enough to be challenging without being unplayable)
- **Maximum**: 200 (slow enough for casual play on level 1)
- **Recommendation**: Level 1 = 150ms, Level 5 = 80ms

### `obstacles`
- **Purpose**: Array of fixed wall/block coordinates on the board (immobile hazards)
- **Format**: `[[x, y], [x, y], ...]` where x and y are grid coordinates (0–19 on a 20×20 board)
- **Minimum**: 0 (no obstacles; fully open board)
- **Maximum**: 30 (too many obstacles blocks safe passage; must leave room for snake + food)
- **Safety Rule**: Obstacles must never block the snake's starting position or spawn areas
- **Recommendation**: Level 1 = 0, Level 5 = 15–20

## Example: level-1.js

```javascript
const LEVEL = {
  id: 1,
  name: "Level 1: Easy",
  foodToFinish: 10,
  startSnakeLength: 3,
  speed: 150,
  obstacles: [],
}
```

## Example: level-5.js

```javascript
const LEVEL = {
  id: 5,
  name: "Level 5: Insane",
  foodToFinish: 20,
  startSnakeLength: 5,
  speed: 80,
  obstacles: [
    [10, 5], [10, 6], [10, 7], [10, 8],  // vertical wall in center
    [5, 10], [6, 10], [7, 10], [8, 10],  // horizontal wall
    [15, 15], [15, 16], [15, 17], [15, 18], [16, 15], [17, 15],  // corner cluster
    [3, 3], [3, 4], [4, 3],  // small corner barrier
  ],
}
```

## Loading Levels in the Game

Each level file is a standalone `.js` file. The browser loads them via:

```html
<script src="levels/level-1.js"></script>
<script src="levels/level-2.js"></script>
<!-- etc -->
```

Or dynamically via `fetch()` when switching levels. The `LEVEL` object becomes globally available after loading.

## Playability Constraints

1. **Always solvable**: With optimal play (no self-collision, no poor choices), the level must be completable
2. **No spawn conflicts**: Starting snake position and first food spawn must never overlap with obstacles
3. **Board utilization**: Obstacles + snake + food must fit comfortably on the 20×20 grid without blocking all movement
4. **Speed balance**: Harder levels have faster speeds but must remain humanly playable (not reaction-impossible)

## File Naming & Ordering

- `levels/level-1.js` – Easiest (tutorial, intro)
- `levels/level-2.js` – Medium-Easy
- `levels/level-3.js` – Medium
- `levels/level-4.js` – Medium-Hard
- `levels/level-5.js` – Hardest (victory endgame)

Progression is linear and mandatory (no skipping).
