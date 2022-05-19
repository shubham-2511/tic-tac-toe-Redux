import React from 'react';

const style = {
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white',
    height: '90px',
    width: '90px',
}

export const Item = ({value, onClick, index}) => {
  return (
    <div style={style} onClick={() => onClick(index)}>
        {value}
    </div>
  )
}
