// Game state
const gameState = {
    currentScreen: 'start',
    nickname: ''
};

// Screen management
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenName + 'Screen').classList.add('active');
    gameState.currentScreen = screenName;
}

// Start button handler
document.getElementById('startButton').addEventListener('click', () => {
    const nickname = document.getElementById('nicknameInput').value.trim();
    if (nickname === '') {
        alert('Please enter a nickname!');
        return;
    }
    gameState.nickname = nickname;
    showScreen('game');
});

// Play again button handler
document.getElementById('playAgainButton').addEventListener('click', () => {
    document.getElementById('nicknameInput').value = '';
    showScreen('start');
});

// Keyboard handler to test game over screen (for testing layer 1)
document.addEventListener('keydown', (e) => {
    if (gameState.currentScreen === 'game' && e.key === ' ') {
        document.getElementById('finalStats').innerHTML =
            '<strong>' + gameState.nickname + '</strong><br>' +
            'Final Score: <strong>0</strong>';
        showScreen('gameOver');
    }
});
