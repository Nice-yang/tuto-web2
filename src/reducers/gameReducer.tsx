export default function reducer(state={
    gameIsDone: false,
    winner: null
}, action) {
    switch (action.type) {
        case "GAME_WON": {
            return {...state,
                gameIsDone: true,
                winner: action.payload
            };
        }
        default: {
            return state;
        }
    }
}