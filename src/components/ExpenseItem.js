import './ExpenseItem.css';

function ExpenseItem(props) {
    // const LocationOfExpenditure = 'DMart';
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 297.69;


    return (
        <div className="expense-item">
            <div>{props.locationOfExpenditure}</div>
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                { /* <h2>Expense item!</h2>, */}
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}
                {/* <h2>Food Rs 10</h2>,
        <h2>Petrol Rs 100</h2>,
        <h2>Movies Rs 200</h2>  */}

            </div>
        </div>

    )

}

export default ExpenseItem;