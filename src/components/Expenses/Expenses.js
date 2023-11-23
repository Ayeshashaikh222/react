import React, { useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

// import Card from "../UI/card";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
     setFilteredYear(selectedYear);
  };

    return (
        <div className="expenses">

          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
             
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