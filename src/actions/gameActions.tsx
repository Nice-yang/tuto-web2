export function gameWon(winner: string) {
    return {
        type: "GAME_WON",
        payload: winner
    };
}
