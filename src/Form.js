const Form = (props) => {
    return (
        <form className="form" onSubmit={props.onSubmit}>
            <div>
                <label className="addexpense__label">Title</label>
                <input
                    className="addexpense__input"
                    type="text"
                    required={true}
                    value={props.title}
                    onChange={props.onTitleChange}
                />
            </div>
            <div>
                <label className="addexpense__label">Amount</label>
                <input
                    className="addexpense__input"
                    type="number"
                    min={0}
                    step={0.01}
                    required={true}
                    value={props.amount}
                    onChange={props.onAmountChange}
                />
            </div>
            <div>
                <label className="addexpense__label">Date</label>
                <input
                    className="addexpense__input"
                    type="date"
                    required={true}
                    value={props.date}
                    onChange={props.onDateChange}
                />
            </div>
            <div className="btn__group">
                <button className="addexpense__btn" type="submit">
                    Add Expense
                </button>
                <button
                    className="cancel__btn"
                    type="button"
                    onClick={props.onCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default Form;
