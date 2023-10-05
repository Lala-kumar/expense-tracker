import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const deleteExpenseHandler = (expenseId) => {
    props.onDeleteExpense(expenseId);
  };

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Expense Not Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDeleteExpense={deleteExpenseHandler}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
