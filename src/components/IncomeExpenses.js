import React from 'react';

export const IncomeExpenses = () => {
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Приход</h4>
        <p className='money plus'>+$0.00</p>
      </div>
      <div>
        <h4>Расход</h4>
        <p className='money minus'>-$0.00</p>
      </div>
    </div>
  )
}