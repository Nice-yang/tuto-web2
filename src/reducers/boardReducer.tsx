export default function reducer(state: any = {
    squares: ["", "", "", "", "", "", "", "", ""],
    isXTurn: true,
    whosTurn: "X"
}, action: any): any {
    switch (action.type) {
        case "SQUARE_CLICK": {
            const isXNext = !state.isXTurn;

            return {...state,
                squares: action.payload,
                isXTurn: isXNext,
                whosTurn: isXNext ? "X" : "O"
            };
        }
        default: {
            return state;
        }
    }
}
