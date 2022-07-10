import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = props => {

    // Doubt {
    // let [title, setTitle] = useState(props.title);
    // const [expense, setExpense] = useState(props.amount);
//}
    // const clickHandler = () => {

    //     setTitle(`Updated`);        
    // }

    return (
        <li>
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        {/* <ExpenseDetails title={title} amount={expense}/> */}
        <ExpenseDetails title={props.title} amount={props.amount}/>
        {/* <button onClick={clickHandler}>Button</button> */}
        <button>Button</button>
        {/* <button onClick={() => setExpense(100)}>Update Expense</button> */}
        <button>Update Expense</button>
    </Card>
    </li>
    )
}

export default ExpenseItem;