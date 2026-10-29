const LEVEL = {
  id: 1,
  name: "Level 1: Easy",
  foodToFinish: 10,
  startSnakeLength: 2,
  speed: 100,
  obstacles: [],
};

if (typeof storeLevel !== 'undefined') {
  storeLevel(LEVEL);
}
