import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
// import Card from '../UI/card';


function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    const changeAmountHandler = () => {
        setAmount('$100');
    }

    const deleteHandler = () => {
        console.log('expense item deleted');
    }


    return (
        <div className="expense-item">

            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} amount={amount} locationOfExpenditure={props.locationOfExpenditure} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={changeAmountHandler}>Change Amount</button>
            <button onClick={deleteHandler}>Delete Expense</button>
        </div>

    )

}

export default ExpenseItem;