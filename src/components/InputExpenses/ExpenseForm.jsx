import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnterdTitle] = useState("");
    const [enteredAmount, setEnterdAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnterdAmount(event.target.value);

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(enteredExpenseData); //invokes a function or props onSaveExpenseData with enteredExpenseData as an argument to pass the entered form data to the parent component.

        setEnterdAmount("");
        setEnteredDate("");
        setEnterdTitle("");
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">

            <div className="new-expense__control">
                <label >Title</label>
                <input id='name' type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label >Amount</label>
                <input id='amount' type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label >Date</label>
                <input id='date' type="date" value={enteredDate} min="2019-01-01" max="2024-01-01" onChange={dateChangeHandler} />
            </div>

            <div className="new-expense__actions">
                <button type='submit' >Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;