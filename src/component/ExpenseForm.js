import "./ExpenseForm.css"
export default function ExpenseForm() {
    return (
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019/8/1" max="2023/1/1" />
                </div>

            </div>

            <div className="new-expense__action">
                <input type="submit" value="Add Expense" />
            </div>

        </form>
    )
}