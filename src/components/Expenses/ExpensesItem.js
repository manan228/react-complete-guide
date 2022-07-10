import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = props => {

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
        <button onClick={() => console.log(`clicked`)}>Button</button>
    </Card>
    )
}

export default ExpenseItem;