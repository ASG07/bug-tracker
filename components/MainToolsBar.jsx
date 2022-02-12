import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import { FiFilter } from "react-icons/fi";
import { BsSortDown } from "react-icons/bs";
import { AiFillCloseCircle, } from "react-icons/ai";

const MainToolsBar = ({ filterBy, setFilterBy, sortBy, setSortBy, openAddCardForm}) => {

    const filter = (
        <Menu>
            <Menu.Item key={0}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setFilterBy('none')}>
                    none
                </a>
            </Menu.Item>
            <Menu.Item key={1}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setFilterBy('very-high')}>
                    Very-High
                </a>
            </Menu.Item>
            <Menu.Item key={2}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setFilterBy('high')}>
                    High
                </a>
            </Menu.Item>
            <Menu.Item key={3}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setFilterBy('normal')}>
                    Normal
                </a>
            </Menu.Item>
            <Menu.Item key={4}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setFilterBy('low')}>
                    Low
                </a>
            </Menu.Item>

        </Menu>
    );

    const sort = (
        <Menu>
            <Menu.Item key={0}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setSortBy('none')}>
                    none
                </a>
            </Menu.Item>
            <Menu.Item key={1}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setSortBy('date')}>
                    By date
                </a>
            </Menu.Item>
            <Menu.Item key={2}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setSortBy('name')}>
                    By name
                </a>
            </Menu.Item>
            <Menu.Item key={3}>
                <a target="_blank" rel="noopener noreferrer" onClick={() => setSortBy('priority')}>
                    By priority
                </a>
            </Menu.Item>

        </Menu>
    );

    return (
        <div className='tools-bar'>
            <div className='tools-bar__filters'>
                <Dropdown overlay={filter}>
                    <a className="ant-dropdown-link tools-bar__filters__button" onClick={e => e.preventDefault()}>
                        <FiFilter />  Filter <DownOutlined />
                    </a>
                </Dropdown>
                {filterBy != 'none' ? <p className='btn-remove-criteria' onClick={() => setFilterBy('none')}>{filterBy}  <AiFillCloseCircle size={15} /></p> : <p className='btn-remove-criteria--closed'> </p>}
                <Dropdown overlay={sort}>
                    <a className="ant-dropdown-link tools-bar__filters__button" onClick={e => e.preventDefault()}>
                        <BsSortDown size={19} /> Sort <DownOutlined />
                    </a>
                </Dropdown>
                {sortBy != 'none' ? <p className='btn-remove-criteria' onClick={() => setSortBy('none')}>{sortBy}  <AiFillCloseCircle size={15} /></p> : <p className='btn-remove-criteria--closed'> </p>}
            </div>
            <button className='add-button' onClick={() => openAddCardForm()}>Add New +</button>
        </div>
    )
};

export default MainToolsBar;
