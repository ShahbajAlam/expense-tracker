import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const year = new Date(props.date).getFullYear();
    const month = Intl.DateTimeFormat(navigator.language, {
        month: "long",
    }).format(new Date(props.date));
    const day = Intl.DateTimeFormat(navigator.language, {
        day: "2-digit",
    }).format(new Date(props.date));

    return (
        <div className="list" onClick={props.onClick}>
            <div className="calendar">
                <h3>{year}</h3>
                <h3>{month.toUpperCase()}</h3>
                <h1>{day}</h1>
            </div>
            <h1 className="list__title">{props.title}</h1>
            <h1 className="list__amount">${props.amount}</h1>
        </div>
    );
};

export default ExpenseItem;
