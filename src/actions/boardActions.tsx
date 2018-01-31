export function updateSquares(squares: string[]) {
    return { 
        type: "SQUARE_CLICK",
        payload: squares
    }
}