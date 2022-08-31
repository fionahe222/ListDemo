import React from 'react';
import {Input, Select, Popover} from 'antd';
import List from '../list';
import './index.css';

const { Option } = Select;

const VariableItem = (props) => {
    const onDeleteItem = () => {
        props.delete(props.item.id);
    }

    const onNameChange = e => {
        props.update(props.item.id, 'varName', e.target.value);
    }

    const onTypeChange = val => {
        props.update(props.item.id, 'varType', val);
        props.update(props.item.id, 'varValue', null);
    }

    const onValueChange = e => {
        props.update(props.item.id, 'varValue', e.target.value);
    }

    const onListValueChange = val => {
        props.update(props.item.id, 'varValue', val);
    }

    return (
        <div className="itemContainer">
            <div className="name">
                <Input value={props.item.varName} disabled={!props.hasListType} onChange={onNameChange} />
            </div>
            <div className="type">
                <Select onChange={onTypeChange}>
                    <Option value="string">string</Option>
                    {props.hasListType && <Option value="list">list</Option>}
                </Select>
            </div>
           <div className="value">
               {
                   props.item.varType !== 'list' && <Input onChange={onValueChange} />
               }
               {
                   props.item.varType === 'list' &&
                   (
                    <Popover
                        content={
                            <List hasListType={false} onChange={onListValueChange} />
                        }
                        trigger="click"
                        placement="right"
                    >
                        <span>add list</span>
                    </Popover>
                   )
               }
           </div>
           <div className="deleteBtn">
               <span onClick={onDeleteItem}>-</span>
            </div>
        </div>
    );
}

export default React.memo(VariableItem);