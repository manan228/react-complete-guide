import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';

const App = () => {

  return (
    <div className="App">
      <h2>Lets get started</h2>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
