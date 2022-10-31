import { useState } from "react";
import Form from "./Form";
import "./AddExpense.css";

const AddExpense = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);

    const resetForm = () => {
        setTitle("");
        setAmount("");
        setDate("");
    };

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        resetForm();
    };

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };

    const amountHandler = (e) => {
        setAmount(e.target.value);
    };

    const dateHandler = (e) => {
        setDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onEnteringData({
            title,
            amount,
            date,
        });
        resetForm();
        closeForm();
    };

    return (
        <div className="addexpense__form">
            {!isFormOpen && (
                <button className="addnew__btn" onClick={openForm}>
                    Add new expense
                </button>
            )}
            {isFormOpen && (
                <Form
                    onSubmit={submitHandler}
                    onTitleChange={titleHandler}
                    onAmountChange={amountHandler}
                    onDateChange={dateHandler}
                    title={title}
                    amount={amount}
                    date={date}
                    onCancel={closeForm}
                />
            )}
        </div>
    );
};

export default AddExpense;
