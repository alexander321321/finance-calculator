import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Добавить новую транзакцию</h3>
      <form onSubmit={onSubmit}>
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