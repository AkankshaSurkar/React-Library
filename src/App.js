import React from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import ExpenseItem from './components/ExpenseItem';

const App=()=> {
  
      // <div className="App">
      //   <header className="App-header">
       const expenses =[
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
        return React.createElement('div', {},
        React.createElement('h2',{}, "Lets get started!"),
        React.createElement(Expenses,{items:expenses})
        );

        
          
          
//          <div>
//           <h2>Let get strted</h2>
//           <Expenses items={expenses}
//            />
// </div>

        // );

      }

      export default App;
      







