export default function reducer(state={
    squares: ["", "", "", "", "", "", "", "", ""],
    isXTurn: true,
    whosTurn: 'X'
}, action) {
    switch (action.type) {
        case "SQUARE_CLICK": {
            let isXNext = !state.isXTurn;
            return {...state,
                squares: action.payload,
                isXTurn: isXNext,
                whosTurn: isXNext ? 'X' : 'O'
            };
        }
        default: {
            return state;
        }
    }
}