import ExpenseDate from './ExpenseDate';
import './Expence.css'
import Card from './Card';
let Expenseitem = ({ Date, amount, name }) => {



    return (
        <Card className='expense-item'>
            <div className='container-item'>
            <ExpenseDate date={Date} />
            </div>
            <div className='expense-description'>
                <h1>{name}</h1>
                <div className='expense-price'>{amount}</div>
            </div>

        </Card>
    )
}

export default Expenseitem;