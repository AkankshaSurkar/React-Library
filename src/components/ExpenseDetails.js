import './ExpenseDetails.css';
function ExpenseDetails(props)
{
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const expenseLocation ='Honda Showroom Nagpur';
    return(
        <div>
            <div>{props.title}</div>
            <div>{props.amount}</div>
            <div>{props.location}</div>
        </div>
    );
}
export default ExpenseDetails;
