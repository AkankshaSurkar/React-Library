import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  
      // <div className="App">
      //   <header className="App-header">
       const expenses =[
        {
          id:'e1',
          title: 'Toilet Paper',
          amount: '94.12',
          date: new Date(2020,7,14),
          LocationOfExpenditure: 'Maxico',
        },
                {
           id: 'e2',       
          title: 'New TV',
          amount: '79992',
          date: new Date(2020,8,9),
          LocationOfExpenditure: 'flipcart',
        },
                {
          id: 'e3',
          title: 'Car Insurance',
          amount: '1000',
          date: new Date(2020,9,20),
          LocationOfExpenditure:'Hondo Showroom',
        },
            {
          id:'e4',
          title: 'New Desk (wooden)',
          amount: '790',
          date: new Date(2020,8,5),
          LocationOfExpenditure:'Deradun',
        },
      ];
        return (
          <div>
            <ExpenseItem 
            title ={expenses[0].title}
            amount = {expenses[0].amount}
            date = {expenses[0].date}
            LocationOfExpenditure = {expenses[0].LocationOfExpenditure}
            ></ExpenseItem>

             <ExpenseItem 
            title ={expenses[1].title}
            amount = {expenses[1].amount}
            date = {expenses[1].date}
            LocationOfExpenditure = {expenses[1].LocationOfExpenditure}

            ></ExpenseItem>

             <ExpenseItem 
            title ={expenses[2].title}
            amount = {expenses[2].amount}
            date = {expenses[2].date}
            LocationOfExpenditure = {expenses[2].LocationOfExpenditure}

            ></ExpenseItem>

<ExpenseItem 
            title ={expenses[3].title}
            amount = {expenses[3].amount}
            date = {expenses[3].date}
            LocationOfExpenditure = {expenses[3].LocationOfExpenditure}

            ></ExpenseItem>
          </div>
        );

      }

      export default App;
      







