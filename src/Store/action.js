import { INCREASE_TIMES, SET_WINNER, UPDATE } from "./actionTypes"

export const update = (index) => {
    return {
        type: UPDATE,
        payload: index
    }
}

export const updateTimes = () => ({
    type: INCREASE_TIMES
})

export const makeWinner = (winner) => ({
    type: SET_WINNER,
    payload: winner
})