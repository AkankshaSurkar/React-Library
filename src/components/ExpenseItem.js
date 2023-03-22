import  {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

 const ExpenseItem =(props)=>{

const [title, setTitle]=useState(props.title);
const [visible,setVisible]=useState(true);

const removeElement=()=>{
    setVisible((expense)=>!expense);
    console.log(visible);
};
     const clickHandler =() =>{
        setTitle('Updated');
        console.log(title);
    };
    
    return(
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className = 'expense-item_description'>
                <h2>{title}</h2>
                <div className ='expense-item_price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            <button onClick={removeElement}>DeleteExpense</button>
            


        </Card>

    );
}
export default ExpenseItem;