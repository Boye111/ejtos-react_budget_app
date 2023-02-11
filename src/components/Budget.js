import React, { useContext, useState } from 'react';
import ViewBudget from './viewbudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const [Editbudget, setEditBudget] = useState(false);

    const Spentsofar = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleEditClick = () => {
        setEditBudget(true);
    };

    const handleSaveClick = (value) => {

        if(value > 20000) {
            alert("Budget cannot exceed 20000");
            setEditBudget("");
            return;
        }
        else if(value < Spentsofar) {
            alert("Budget cannot be lower than spending");
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
