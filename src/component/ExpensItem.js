import ExpenseDate from './ExpenseDate';

import './Expence.css'
let Expenseitem = ({ Date, amount, name }) => {



    return (
        <div className='expense-item'>
            <div className='container-item'>
            <ExpenseDate date={Date} />
            </div>
            <div className='expense-description'>
                <h1>{name}</h1>
                <div className='expense-price'>{amount}</div>
            </div>

        </div>
    )
}

export default Expenseitem;