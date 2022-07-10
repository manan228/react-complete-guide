import ExpenseItem from './ExpensesItem'
import Card from '../UI/Card'

const Expenses = (props) => {

    return (
    <Card>
        {props.items.map(item => {

            return <ExpenseItem title={item.title} amount={item.amount} date={item.date} location={item.locationOfExpense}></ExpenseItem>
})}
    </Card>
    )
}

export default Expenses;