import React from 'react';
import './ExpenseForm.css';

const ExpenseFrom=()=>{
    const titleChangeHandler=(event)=>{
        console.log(event.target.value);
    };
    return (
        <form>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type = 'text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type = 'number' min="0.01" step="0.01"/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type = 'date' min="2019-12-31" max="01-01-2023"/>
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseFrom;