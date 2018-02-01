export function updateSquares(squares: string[]): any {
    return {
        type: "SQUARE_CLICK",
        payload: squares
    };
}
