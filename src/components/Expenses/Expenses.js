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

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p>No expenses found</p>;

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
            
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        locationOfExpenditure={expense.locationOfExpenditure}

      />
    ));
  }

    return (
        <div className="expenses">

          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 


          {expensesContent}

           {/* using && operator approach */}

          {/* {filteredExpenses.length === 0 &&  <p>No expenses found</p>}
          {filteredExpenses.length === 0 && 
          filteredExpenses.map((expense) => (
            
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              locationOfExpenditure={expense.locationOfExpenditure}
    
            />
          ) */}


         {/* using turnary operator approach */}

        {/* {filteredExpenses.length === 0 ? (
           <p>No expenses found</p>
           ) : (
          filteredExpenses.map((expense) => (
            
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              locationOfExpenditure={expense.locationOfExpenditure}
    
            />
          )) */}

          
        
        </div>
    )
}

export default Expenses;