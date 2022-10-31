import "./FilterYear.css";
import { useState } from "react";

const initialYear = new Date().getFullYear();

const FilterYear = (props) => {
    const [year, setYear] = useState(new Date().getFullYear());

    const yearChangeHandler = (e) => {
        setYear(e.target.value);
        props.onYearChange(Number(e.target.value));
    };

    return (
        <div className="list__filter">
            <label>Filter Year</label>
            <select onChange={yearChangeHandler} value={year}>
                <option value={initialYear}>{initialYear}</option>
                <option value={initialYear - 1}>{initialYear - 1}</option>
                <option value={initialYear - 2}>{initialYear - 2}</option>
                <option value={initialYear - 3}>{initialYear - 3}</option>
            </select>
        </div>
    );
};

export default FilterYear;
