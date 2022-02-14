import React from 'react';

export const TransactionList = () => {
  return (
    <>
      <h3>История:</h3>
      <ul className='list'>
        <li className='minus'>
          Наличные <span>-$400</span>
          <button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  )
}