import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    //we receive enteredExpenseData as a parameter named expenseDataFromNewExpense
    const saveExpenseDataHandler = (expenseDataFromNewExpense) => {
        const expenseData = {
            ...expenseDataFromNewExpense,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData) // we pass expenseData as an argument on calling function or props onAddExpense

    };

    return <div className="new-expense">
        {/* it passes the function saveExpenseDataHandler as a prop to the ExpenseForm component. */}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;
