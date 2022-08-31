import React, { useState, useCallback, useEffect } from 'react';
import ListItem from '../listItem';

const List = (props) => {
    const [list, setList] = useState([]);
    
    const addItem = () => {
        const newList = list.concat([{
            id: list.length ? list[list.length - 1].id + 1 : 0, 
            varName: props.hasListType ? null : list.length + 1,
            varType: null,
            varValue: null
        }]);
        setList(newList);
    };

    const deleteItem = id => {
        const index = list.findIndex(i => i.id === id);
        const newList = [...list];
        if (index > -1) {
            newList.splice(index, 1);
        }
        if (!props.hasListType) {
            newList.forEach((i, idx) => {console.log(i, idx); i.varName = (idx+1);});
        }
        console.log(newList);
        setList(newList);
    };

    const updateItem = (id, updateType, val) => {
        const index = list.findIndex(i => i.id === id);
        const newList = [...list];
        newList[index][updateType] = val;
        setList(newList);
    };

    useEffect(() => {
        if (props.onChange) {
            props.onChange(list)
        }
    }, [list]);

    return (
        <div className="listContainer">
            <div className="list">
                {
                    list.map(item => (
                    <ListItem
                        key={item.id}
                        item={item}
                        delete={deleteItem}
                        update={updateItem}
                        hasListType={props.hasListType}
                    />
                    ))
                }
            </div>
            <div className="addBtn" onClick={addItem}>add</div>
        </div>
    );
}

export default React.memo(List);