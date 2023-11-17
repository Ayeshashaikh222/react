import './ExpenseDetails.css';

function ExpenseDetails(props) {

    return (
        <div>
            <div className="expense-location">{props.locationOfExpenditure}</div>
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

export default ExpenseDetails;