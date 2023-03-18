import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
function ExpenseItem(props){
    const expenseDate = new Date(2021,2,28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const expenseLocation ='Honda Showroom Nagpur';
    
        return (
            
           <div className='expense-item'>
            <ExpenseDate date={props.date} />
           <div className='expense-item_description'>
           <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
            {/* <h2>{props.title}</h2>
            <div className='expense-item_price'>${props.amount}</div>
            <div className='expense-item_place'>
           <div>{props.LcommitocationOfExpenditure}</div>
            </div> */}

    
           </div>
           </div>
        );
    }
    export default ExpenseItem;







// function ExpenseItem(){
// const expenseDate = new Date(2021,2,28);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 294.67;
// const LocationOfExpenditure ='Honda Showroom Nagpur';

//     return (
//        <div className='expense-item'>
//        <div>{expenseDate.toISOString()}</div>
//        <div className='expense-item_description'>
//         <h2>{expenseTitle}</h2>
//         <div className='expense-item_price'>${expenseAmount}</div>
//         <div className='expense-item_place'>
//         <div>{LocationOfExpenditure}</div>
//             </div>

//        </div>
//        </div>
//     );
// }
// export default ExpenseItem;