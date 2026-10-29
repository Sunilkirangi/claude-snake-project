describe('Snake Game Integration - Actual Game Loop', () => {
  let gameState;

  // Helper function to simulate game update with collision detection
  function updateSnake() {
    gameState.direction = gameState.nextDirection;
    const head = gameState.snake[0];
    const newHead = {
      x: head.x + gameState.direction.x,
      y: head.y + gameState.direction.y
    };

    const gridSize = 20;
    const tileCount = 400 / gridSize;

    // Wall collision
    if (newHead.x < 0 || newHead.x >= tileCount || newHead.y < 0 || newHead.y >= tileCount) {
      gameState.gameActive = false;
      return;
    }

    // Self collision
    for (let segment of gameState.snake) {
      if (newHead.x === segment.x && newHead.y === segment.y) {
        gameState.gameActive = false;
        return;
      }
    }

    gameState.snake.unshift(newHead);
    gameState.snake.pop();
  }

  beforeEach(() => {
    gameState = {
      nickname: 'TestPlayer',
      avatar: '🟢',
      snake: [
        { x: 10, y: 10 }, // head
        { x: 9, y: 10 },
        { x: 8, y: 10 }
      ],
      food: { x: 15, y: 15 },
      direction: { x: 1, y: 0 },
      nextDirection: { x: 1, y: 0 },
      gameActive: true
    };
  });

  test('without direction check: snake moving right can accept left immediately and collide', () => {
    // Snake is at: [10, 9, 8] moving right
    gameState.direction = { x: 1, y: 0 };
    gameState.nextDirection = { x: 1, y: 0 };
    gameState.snake = [
      { x: 10, y: 10 }, // head
      { x: 9, y: 10 },  // body
      { x: 8, y: 10 }   // tail
    ];

    // WITHOUT the check, left arrow is accepted immediately
    gameState.nextDirection = { x: -1, y: 0 };

    // Update 1: direction becomes left, head moves left to (9, 10)
    updateSnake();
    // Now head is at (9, 10) but body segment is also at (9, 10)
    // This should cause self-collision

    expect(gameState.gameActive).toBe(false);
  });

  test('without direction check: rapid up then left while moving up causes collision', () => {
    // Snake moving up: [10, 10], [10, 11], [10, 12]
    gameState.direction = { x: 0, y: -1 };
    gameState.nextDirection = { x: 0, y: -1 };
    gameState.snake = [
      { x: 10, y: 10 }, // head
      { x: 10, y: 11 }, // body
      { x: 10, y: 12 }  // tail
    ];

    // First update: move up
    updateSnake();
    // Head is now at (10, 9), body is [10, 10], [10, 11]

    // Rapid left arrow press (without check, accepted immediately)
    gameState.nextDirection = { x: -1, y: 0 };

    // Second update: move left from (10, 9)
    updateSnake();
    // Head moves to (9, 9), snake grows to [9, 9], [10, 9], [10, 10], [10, 11]

    // This should NOT collide if it's a valid turn
    expect(gameState.gameActive).toBe(true);
  });

  test('without direction check: right then immediate left reversal hits body', () => {
    // Scenario: snake is moving right, body is behind it
    gameState.direction = { x: 1, y: 0 };
    gameState.nextDirection = { x: 1, y: 0 };
    gameState.snake = [
      { x: 10, y: 10 }, // head
      { x: 9, y: 10 },  // immediately behind
      { x: 8, y: 10 }
    ];

    // Update 1: move right
    updateSnake();
    // Head is now at (11, 10), body is [10, 10], [9, 10]

    // Press left immediately (without the check)
    gameState.nextDirection = { x: -1, y: 0 };

    // Update 2: direction changes to left, moves to (10, 10)
    updateSnake();
    // Head moves to (10, 10) but that's where body is!
    // This SHOULD cause collision

    expect(gameState.gameActive).toBe(false);
  });
});
