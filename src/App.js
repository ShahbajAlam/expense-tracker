import { useState } from "react";
import Card from "./Card";
import Chart from "./Chart";
import AddExpense from "./AddExpense";
import FilterYear from "./FilterYear";
import RenderList from "./RenderList";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./App.css";

const expenses = JSON.parse(window.localStorage.getItem("expenses")) || [];
let itemToBeDeleted;

const App = () => {
    const [expense, setExpense] = useState(expenses);
    const [year, setYear] = useState(new Date().getFullYear());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBackdropOpen, setIsBackdropOpen] = useState(false);
    
    const getData = (obj) => {
        const enteredData = { ...obj, id: Math.random().toString() };
        setExpense((prevState) => [enteredData, ...prevState]);
    };

    const yearChangeHandler = (userSelectedYear) => {
        setYear(userSelectedYear);
    };

    const filteredExpense = expense.filter(
        (e) => new Date(e.date).getFullYear() === year
    );

    const showModal = () => {
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    const showBackdrop = () => {
        setIsBackdropOpen(true);
    };

    const hideBackdrop = () => {
        setIsBackdropOpen(false);
    };

    const getClickedItemID = (id) => {
        itemToBeDeleted = id;
        showBackdrop();
        showModal();
    };

    const okBtnHandler = () => {
        setExpense(expense.filter((e) => e.id !== itemToBeDeleted));
        hideModal();
        hideBackdrop();
    };

    const cancelBtnHandler = () => {
        hideModal();
        hideBackdrop();
    };

    window.localStorage.setItem("expenses", JSON.stringify(expense));

    return (
        <Card>
            <AddExpense onEnteringData={getData} />
            <FilterYear onYearChange={yearChangeHandler} />
            <Chart data={filteredExpense} />
            <RenderList
                expense={filteredExpense}
                year={year}
                getID={getClickedItemID}
            />
            {isModalOpen && (
                <Modal
                    getID={getClickedItemID}
                    onCancel={cancelBtnHandler}
                    onOk={okBtnHandler}
                    hideBackdrop={hideBackdrop}
                    showBackdrop={showBackdrop}
                />
            )}
            {isBackdropOpen && (
                <Backdrop onClick={hideBackdrop} onCancel={cancelBtnHandler} />
            )}
        </Card>
    );
};

export default App;
