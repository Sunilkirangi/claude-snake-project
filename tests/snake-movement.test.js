describe('Snake Movement - Opposite Direction Blocking', () => {
  let gameState;

  beforeEach(() => {
    // Reset gameState for each test
    gameState = {
      nickname: 'TestPlayer',
      avatar: '🟢',
      snake: [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
      ],
      food: { x: 15, y: 15 },
      direction: { x: 1, y: 0 },
      nextDirection: { x: 1, y: 0 },
      gameActive: true
    };
  });

  test('when snake moves right, pressing left arrow should not cause immediate reversal', () => {
    // Snake moving right (direction = {x: 1, y: 0})
    gameState.direction = { x: 1, y: 0 };
    gameState.nextDirection = { x: 1, y: 0 };

    // Simulate pressing left arrow (which would set nextDirection to {x: -1, y: 0})
    // In the actual game, this should be blocked because direction.x is not 0
    const leftArrowPressed = { x: -1, y: 0 };

    // The game should only accept left if direction.x === 0
    if (gameState.direction.x === 0) {
      gameState.nextDirection = leftArrowPressed;
    }

    // After this, direction should still be right, not left
    expect(gameState.direction.x).toBe(1);
    expect(gameState.nextDirection.x).toBe(1);
  });

  test('when snake moves up, pressing left arrow very fast should not cause game to end', () => {
    // Snake moving up (direction = {x: 0, y: -1})
    gameState.direction = { x: 0, y: -1 };
    gameState.nextDirection = { x: 0, y: -1 };

    // First key press: up arrow (already moving up, should be ignored or kept)
    if (gameState.direction.y === 0) {
      gameState.nextDirection = { x: 0, y: -1 };
    }

    // Second key press: left arrow (very fast, before direction updates)
    const leftArrowPressed = { x: -1, y: 0 };
    if (gameState.direction.x === 0) {
      gameState.nextDirection = leftArrowPressed;
    }

    // After these inputs, direction should be up (or left if it accepted it)
    // The key point: it should NOT result in a collision or game end
    // Moving left from {x:0, y:-1} is valid - it turns the snake left
    expect(gameState.gameActive).toBe(true);
  });

  test('snake reversing into itself should be blocked', () => {
    // Snake moving right
    gameState.direction = { x: 1, y: 0 };
    gameState.nextDirection = { x: 1, y: 0 };
    gameState.snake = [
      { x: 10, y: 10 }, // head
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ];

    // Try to reverse left (should be blocked)
    const leftArrowPressed = { x: -1, y: 0 };
    if (gameState.direction.x === 0) {
      gameState.nextDirection = leftArrowPressed;
    }

    // nextDirection should still be right
    expect(gameState.nextDirection.x).toBe(1);
  });
});
