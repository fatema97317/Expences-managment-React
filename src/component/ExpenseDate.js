export default function ExpenseDate(props) {
  

    let month = props.date.toLocaleString('en-us', { month: "short" });
    let day = props.date.toLocaleString('en-us', { day: "2-digit" });
    let year = props.date.getFullYear();
    console.log(year);

    return (
        <div>
            <div className="mount">{year}</div>
            <div className="day">{month}</div>

            <div className="year">{day}</div>
        </div>
    )
}