import React, { useContext, useState } from 'react';
import ViewBudget from './viewbudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [Editbudget, setEditBudget] = useState(false);

    const handleEditClick = () => {
        setEditBudget(true);
    };

    const handleSaveClick = (value) => {

        if(value > 20000) {
            alert("Budget cannot exceed 20000");
            setEditBudget("");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setEditBudget(false);
    };

    return (
        <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
            {Editbudget ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>

    );
};

export default Budget;
