import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeWinner, update, updateTimes } from '../Store/action';
import { Item } from './Item';

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '10px',
  width: '290px',
  margin: '0px auto'
}



export const TicTacToe = () => {

    const state = useSelector(state => state.tictactoeState);
    const winner = useSelector(state => state.winner);

    const dispatch = useDispatch();
    console.log({state, winner});

    const onClick = (index) => {
      if(state[index] === "" && winner === "") {
      dispatch(update(index));
      dispatch(updateTimes())
      console.log("Clicked", index);
      checkWinner(state);
      }
    }

    const checkRow = (state) => {
      for(let i = 0; i < 3; i++) {
          if( state[i*3 + 0] === state[i*3 + 1] && state[i*3 + 1] === state[i*3 + 2] && state[i*3 + 2] !== "") {
              dispatch(makeWinner(state[i*3 + 0]));
              console.log("row");
              break;
          }
      }
  }

  const checkCol = (state) => {
      for(let i = 0; i < 3; i++) {
          if( state[i + 0] === state[i + 3] && state[i + 3] === state[i + 6] && state[i + 6] !== "") {
              dispatch(makeWinner(state[i + 0]));
              console.log("column")
              break;
          }
      }
  }

  const checkDig = (state) => {
      if(state[0] === state[4] && state[4] === state[8] && state[8] !== "") {
          dispatch(makeWinner(state[0]));
          console.log("diagonal")
      }
      if(state[2] === state[4] && state[4] === state[6] && state[6] !== "")  {
          dispatch(makeWinner(state[2]));
          console.log("diagonal");
      }
  }

  const checkWinner = (state1) => {
      checkRow(state1);
      checkCol(state1);
      checkDig(state1);
  }

  return (
    <div>
      <div style={style}>
        {
            state.map((value, index) => <Item key={index} index={index} value={value} onClick={onClick} />)
        }
      </div>
      <h1>
        {winner.length > 0 && `Winner is ${winner}`}
      </h1>
    </div>
    
  )
}
