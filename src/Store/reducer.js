import { INCREASE_TIMES, SET_WINNER, UPDATE } from "./actionTypes"

const initState = {
    tictactoeState: ["", "", "", "", "", "", "", "", ""],
    winner: "",
    times: 1
}

export const reducer = ( state=initState, action ) => {
    switch( action.type ) {
        case UPDATE:
            const newState = state.tictactoeState;
            newState[action.payload] = state.times % 2 === 1 ? "O" : "X";
            return {...state, tictactoeState: [...newState]};
        case INCREASE_TIMES:
            return {...state, times: state.times+1};
        case SET_WINNER:
            return {...state, winner: action.payload}
        default:
            return state;
    }
}