import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
    // const LocationOfExpenditure = 'DMart';
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 297.69;




    return (
        <div className="expense-item">

            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure} />
        </div>

    )

}

export default ExpenseItem;