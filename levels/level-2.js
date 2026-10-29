const LEVEL = {
  id: 2,
  name: "Level 2: Medium",
  foodToFinish: 15,
  startSnakeLength: 3,
  speed: 90,
  obstacles: [
    [5, 4], [6, 4], [7, 4],
    [15, 15], [15, 16], [15, 17],
  ],
};

if (typeof storeLevel !== 'undefined') {
  storeLevel(LEVEL);
}
