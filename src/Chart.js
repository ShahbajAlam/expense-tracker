import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPoints = [
        { mon: "Jan", amount: 0 },
        { mon: "Feb", amount: 0 },
        { mon: "Mar", amount: 0 },
        { mon: "Apr", amount: 0 },
        { mon: "May", amount: 0 },
        { mon: "Jun", amount: 0 },
        { mon: "Jul", amount: 0 },
        { mon: "Aug", amount: 0 },
        { mon: "Sep", amount: 0 },
        { mon: "Oct", amount: 0 },
        { mon: "Nov", amount: 0 },
        { mon: "Dec", amount: 0 },
    ];

    const expenses = props.data.map((e) => e.amount);

    const expenseMonthIndex = props.data.map((e) =>
        new Date(e.date).getMonth()
    );

    expenseMonthIndex.map((e, i) => (dataPoints[e].amount = expenses[i]));

    const maxExpense = expenses.length === 0 ? 0 : Math.max(...expenses);

    return (
        <div className="chart">
            {dataPoints.map((e) => {
                return (
                    <ChartBar
                        key={e.mon}
                        amount={e.amount}
                        maxExpense={maxExpense}
                        month={e.mon}
                    />
                );
            })}
        </div>
    );
};

export default Chart;
