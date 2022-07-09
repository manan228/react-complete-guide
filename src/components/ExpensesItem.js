import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2022, 8, 9);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 1000;
    const locationOfExpense = 'Ahmedabad'

    return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle} - {locationOfExpense}</h2>
            <div className='expense-item__price'>{expenseAmount}</div>
        </div>
    </div>
    )
}

export default ExpenseItem;