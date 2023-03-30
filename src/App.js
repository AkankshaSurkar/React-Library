import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpenses from './components/NewExpenses/NewExpenses';
import ExpenseFrom from './components/NewExpenses/ExpenseForm';

  
      // <div className="App">
      //   <header className="App-header">
       const DUMMY_EXPENSES =[
        {
          id:'e1',
          title: 'Toilet Paper',
          amount: '94.12',
          date: new Date(2020,7,14),
          location: 'Maxico',
        },
                {
           id: 'e2',       
          title: 'New TV',
          amount: '79992',
          date: new Date(2020,8,9),
          location: 'flipcart',
        },
                {
          id: 'e3',
          title: 'Car Insurance',
          amount: '1000',
          date: new Date(2020,9,20),
          location:'Hondo Showroom',
        },
            {
          id:'e4',
          title: 'New Desk (wooden)',
          amount: '790',
          date: new Date(2020,8,5),
          location:'Deradun',
        },
      ];
        // return React.createElement('div', {},
        // React.createElement('h2',{}, "Lets get started!"),
        // React.createElement(Expenses,{items:expenses})
        // );
        const App=()=> {
          const[expenses,setExpenses]=
          useState(DUMMY_EXPENSES);

        const addExpenseHandler = (expense)=>{
          setExpenses((prevExpenses)=>{
            return [expense,...prevExpenses]
          });
        };

          return(
         <div>
          <NewExpenses onAddExpenses={addExpenseHandler}/>
          <Expenses items={expenses}
          />
 </div>

         );

      }

      export default App;
      







