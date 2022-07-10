import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  console.log(props.items[0].date.getFullYear());
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
        <ExpensesList items={filteredExpense}/>
        {filteredExpense.length === 1 && (
          <p>Only single Expense here. Please add more...</p>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
