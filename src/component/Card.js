
import "./Card.css"
export default function Card(expense) {
    const classCard = expense.className;
    return (
        // Adding a space after card is neccessary when we add two classname for a tag
        <div className={"card " + classCard}>
            {expense.children}
        </div>
    )
}