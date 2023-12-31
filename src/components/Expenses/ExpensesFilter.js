import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropDownChangedHandler = (event) => {
        props.onChangeFilter(event.target.value);

    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className='expenses-filter'>Filter by year</label>
        <select className='' value={props.selected} onChange={dropDownChangedHandler}>
        <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;