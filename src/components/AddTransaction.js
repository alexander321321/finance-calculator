import React from 'react';

export const AddTransaction = () => {
  return (
    <>
      <h3>Добавить новую транзакцию</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Текст</label>
          <input type="text" id="text" placeholder="Введите текст..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Сумма <br />
            (отрицательная- расходы, положительная- доходы)
          </label>
          <input type="number" id="amount" placeholder="Введите сумму..." />
        </div>
        <button className="btn">Добавить транзакцию</button>
      </form>
    </>
  )
}