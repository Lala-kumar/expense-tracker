import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    //1st Approach (multiple state Approach) -- MOST RECCOMENDATE--
    const [enteredTitle, setEnterdTitle] = useState("");
    const [enteredAmount, setEnterdAmount] = useState("");
    const [enteredDate, setEnterdDate] = useState("");

    // 2nd(single state Approach) --NOT RECCOMENDATE-- 3rd(single state Approach) --RECCOMENDATE--
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    const titleChangeHandler = (event) => {
        // 1st Approach
        setEnterdTitle(event.target.value);

        // 2nd Approach
        // setUserInput({
        //     ...userInput, enteredTitle: event.target.value
        // })

        //3rd Approach
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    };

    const amonutChangeHandler = (event) => {
        // 1st Approach
        setEnterdAmount(event.target.value);

        // 2nd Approach
        // setUserInput({
        //     ...userInput, enteredAmount: event.target.value
        // })

        //3rd Approach
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // })
    };

    const dateChangeHandler = (event) => {
        // 1st Approach
        setEnterdDate(event.target.value);

        // 2nd Approach
        // setUserInput({
        //     ...userInput, enteredDate: event.target.value
        // })

        //3rd Approach
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle, // userInput.enteredTitle, 3rd Approach
            amonut: enteredAmount, // userInput.enteredAmount,
            date: new Date(enteredDate) // new Date(userInput.enteredDate)
        };

        console.log(expenseData);
        setEnterdAmount("");
        setEnterdDate("");
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
                <input id='amount' type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amonutChangeHandler} />
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