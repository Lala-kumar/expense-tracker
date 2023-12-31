import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/InputExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //expense parameter, which represents the new expense that is being added.
  const addExpenseHandler = (expense) => {
    //The setExpenses function takes a callback function as an argument, which receives the previous state value (prevExpenses) as its parameter.
    setExpenses((prevExpenses) => {
      const UpdateExpense = [expense, ...prevExpenses];
      return UpdateExpense;
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
