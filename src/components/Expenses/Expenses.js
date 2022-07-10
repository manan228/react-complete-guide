import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((item) => {
    return item.date.getFullYear() == filteredYear;
  });

  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onExpenseSelectedValue={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense}/>
        {filteredExpense.length === 1 && (
          <p>Only single Expense here. Please add more...</p>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
