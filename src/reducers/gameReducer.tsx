export default function reducer(state: any = {
    gameIsDone: false,
    winner: undefined
}, action: any) {
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
