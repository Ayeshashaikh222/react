import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
// import Card from "../UI/card";


function Expenses(props) {
    return (
        <div className="expenses">
             
             {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}

        />
      ))}
        </div>
    )
}

export default Expenses;