import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
// import Card from '../UI/card';


function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    
    


    return (
        <li>
        <div className="expense-item">

            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} amount={amount} locationOfExpenditure={props.locationOfExpenditure} />
            
        </div>
        </li>

    )

}

export default ExpenseItem;