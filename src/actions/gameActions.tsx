export function gameWon(winner) {
    return { 
        type: "GAME_WON",
        payload: winner
    };
}