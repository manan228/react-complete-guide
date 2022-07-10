import ExpenseItem from './ExpensesItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {

        setFilteredYear(selectedYear)
    }

    return (
        <div>
        
    <Card>
    <ExpensesFilter selected={filteredYear} onExpenseSelectedValue={filterChangeHandler}/>
        {props.items.map(item => {

            return <ExpenseItem title={item.title} amount={item.amount} date={item.date} location={item.locationOfExpense}></ExpenseItem>
})}
    </Card>
    </div>
    )
}

export default Expenses;