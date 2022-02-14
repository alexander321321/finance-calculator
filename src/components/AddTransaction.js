import React, { useState } from 'react';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Добавить новую транзакцию</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Текст</label>
          <input
            type="text"
            id="text"
            placeholder="Введите текст..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Сумма <br />
            (отрицательная- расходы, положительная- доходы)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Введите сумму..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Добавить транзакцию</button>
      </form>
    </>
  )
}