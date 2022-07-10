import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = props => {

    let [title, setTitle] = useState(props.title);
    const [expense, setExpense] = useState(props.amount);

    const clickHandler = () => {

        setTitle(`Updated`);        
    }

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={title} location={props.location} amount={expense}/>
        <button onClick={clickHandler}>Button</button>
        <button onClick={() => setExpense(100)}>Update Expense</button>
    </Card>
    )
}

export default ExpenseItem;