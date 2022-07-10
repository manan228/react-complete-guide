import ExpenseItem from './ExpensesItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    console.log(props.items[0].date.getFullYear())
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {

        setFilteredYear(selectedYear)
    }

    const filteredExpense = props.items.filter(item => {

        return item.date.getFullYear() == filteredYear
    })


    return (
        <div>
        
    <Card>
    <ExpensesFilter selected={filteredYear} onExpenseSelectedValue={filterChangeHandler}/>
        {filteredExpense.map(item => {
            return <ExpenseItem title={item.title} key={item.id} amount={item.amount} date={item.date}></ExpenseItem>
})}
    </Card>
    </div>
    )
}

export default Expenses;