import React, { useState, useCallback } from 'react';
import List from './list';

const VariableList = () => {
    const [result, setResult] = useState([]);

    const onUpdateList = useCallback(val => setResult(val), []);

    const onSubmit = () => {
        console.log(result);
    }
    return (
        <div className="listContainer">
            <div className="varList">
                <List
                   hasListType={true}
                   onChange={onUpdateList}
                />
            </div>
            <div onClick={onSubmit}>submit</div>
        </div>
    );
}

export default VariableList;