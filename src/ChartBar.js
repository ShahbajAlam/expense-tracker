import "./ChartBar.css";

const ChartBar = (props) => {
    const heightValue =
        props.maxExpense > 0
            ? (props.amount / props.maxExpense) * 100 + "%"
            : 0 + "%";

    return (
        <div className="container">
            <div className="chartbar__outter">
                <div
                    className="chartbar__inner"
                    style={{ height: heightValue }}
                ></div>
            </div>
            <p className="label">{props.month}</p>
        </div>
    );
};

export default ChartBar;
