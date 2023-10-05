import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const clickHandler = () => {
    props.onDeleteExpense(props.id);
  };

  return (
    // this class 'expense-item' doesn't work because we already use class in the <div className='card'> in Card.jsx it works only when we do classes = 'card ' + props.className;
    <li>
      <Card className="expense-item">
        <ExpenseDate det={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>

        <div className="expense-item__price"> ${props.amount} </div>

        <button onClick={clickHandler} className="delete-button">
          <svg className="delete-svgIcon" viewBox="0 0 448 512">
            <path
              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 
            0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            ></path>
          </svg>
        </button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
