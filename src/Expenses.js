import Expenseitem from "./component/ExpensItem"
import "./component/Expence.css"
import Card from "./component/Card"
export default function Expenses({ expense }) {
    return (
        <Card className='Expense'>
            <Expenseitem name={expense[0].title} amount={expense[0].amount} Date={expense[0].date} />
            <Expenseitem name={expense[1].title} amount={expense[1].amount} Date={expense[1].date} />
            <Expenseitem name={expense[2].title} amount={expense[2].amount} Date={expense[2].date} />
            <Expenseitem name={expense[3].title} amount={expense[3].amount} Date={expense[3].date} />
        </Card>
    )
}