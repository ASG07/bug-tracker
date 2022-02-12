import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import { FiFilter } from "react-icons/fi";
import { BsSortDown } from "react-icons/bs";
import { AiFillCloseCircle, } from "react-icons/ai";

const ToolsBar = ({openAddEmployeeForm}) => {

    return (
        <div className='tools-bar'>
            <div className='tools-bar__filters'>
                
            </div>
            <button className='add-button' onClick={() => openAddEmployeeForm()}>Add New Empoloyee +</button>
        </div>
    )
};

export default ToolsBar;
