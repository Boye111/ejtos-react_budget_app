import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [currencystate, setCurrencystate] = useState(currency);

    const updateCurrencyicon = () => {
        switch(currency) {
            case '$':
                setCurrencystate('$ Dollars');
                break;
            case '£':
                setCurrencystate('£ Pound');
                break;
            case '€':
                setCurrencystate('€ Euro');
                break;
            case '₹':
                setCurrencystate('₹ Ruppee');
                break;
            default:
                setCurrencystate('£ Pound');

        }
    };

    useEffect(() => {
        updateCurrencyicon()
    });

    const currencychange = (newCurrency) => {
        if (['$', '£', '€', '₹'].includes(newCurrency)) {
            console.log(newCurrency);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newCurrency
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <Dropdown>
                <Dropdown.Toggle className='dropdown' variant='success' id='dropdown-basic'>
                    Currency {currencystate}
                </Dropdown.Toggle>
                <Dropdown.Menu className='menu'>
                    <Dropdown.Item onClick={() => {currencychange('$')}} className='currency-item' href="#/action-1">$ Dollar</Dropdown.Item>
                    <Dropdown.Item onClick={() => {currencychange('£')}} className='currency-item' href="#/action-2">£ Pound</Dropdown.Item>
                    <Dropdown.Item onClick={() => {currencychange('€')}} className='currency-item' href="#/action-3">€ Euro</Dropdown.Item>
                    <Dropdown.Item onClick={() => {currencychange('₹')}} className='currency-item' href="#/action-4">₹ Ruppee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Currency;