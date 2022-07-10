import ExpenseItem from "./ExpensesItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

  if (props.items.length == 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          key={item.id}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
