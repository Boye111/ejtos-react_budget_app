import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const DecreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
                <AiFillPlusCircle className='plus' style={{fontSize: 30, color: '#023020'}} onClick={
                    event => increaseAllocation(props.name)
                }>
                    +
                </AiFillPlusCircle>
            </td>
            <td>
                <AiFillMinusCircle className='minus' style={{fontSize: 30, color: '#660000'}} onClick={
                    event => DecreaseAllocation(props.name)
                }>
                    +
                </AiFillMinusCircle>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={
                    handleDeleteExpense
                }>
                </TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
