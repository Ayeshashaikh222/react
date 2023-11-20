import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
// import Card from '../UI/card';

function ExpenseItem(props) {
    const clickHandler = () => {
        console.log('clicked!!!!');
    };

    const deleteHandler = () => {
        console.log('expense item deleted');
    }


    return (
        <div className="expense-item">

            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteHandler}>Delete Expense</button>
        </div>

    )

}

export default ExpenseItem;