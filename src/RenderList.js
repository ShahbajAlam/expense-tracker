import "./RenderList.css";
import ExpenseItem from "./ExpenseItem";
import "./index";

const RenderList = (props) => {
    const getClickedItemID = (id) => {
        props.getID(id);
    };

    if (props.expense.length === 0) {
        return <h2>No expenses found for the year {props.year}</h2>;
    }
    const filteredArr = props.expense.map((e) => {
        return (
            <ExpenseItem
                onClick={getClickedItemID.bind(null, e.id)} //we are doing this to get the ID of the expense which is clicked.
                key={e.id}
                title={e.title}
                amount={e.amount}
                date={e.date}
            />
        );
    });
    return filteredArr;
};

export default RenderList;
