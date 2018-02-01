export function gameWon(winner: string): any {
    return {
        type: "GAME_WON",
        payload: winner
    };
}
