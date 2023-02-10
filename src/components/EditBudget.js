import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);
    const [ currency ] = useContext(AppContext);
    return (
        <>
        <div className='input-group-prepend'>
        
        </div>
        <input
            required='required'
            type='number'
            step='10'
            class='form-control mr-3'
            id='name'
            value={value}
            onChange={(event) => setValue(event.target.value)}>
            </input>
        <button
            type='button'
            class='btn btn-primary'
            onClick={() => props.handleSaveClick(value)}>
                Save
            </button>
            </>

    );
};

export default EditBudget;