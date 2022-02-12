import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import EmployeesToolsBar from './EmployeesToolsBar';
import AddEmployeePopup from './AddEmployeePopup';
import Tabs from './Tabs';
import { Table, Modal } from 'antd';


import { DeleteOutlined } from "@ant-design/icons";
import { modalGlobalConfig } from 'antd/lib/modal/confirm';




const Employees = ({ data }) => {
    const { cards, setCards, employees, setEmployees } = data

    const [isAddingEmployee, setIsAddingEmployee] = useState(false)


    const columns = [
        {
            key: '0',
            title: 'Name',
            dataIndex: 'name',
        },
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: '2',
            title: 'Working On',
            dataIndex: 'workingOn',
            sorter: {
                compare: (a, b) => a.workingOn - b.workingOn,
                multiple: 3,
            },
        },
        {
            key: '3',
            title: 'Finished',
            dataIndex: 'finished',
            sorter: {
                compare: (a, b) => a.finished - b.finished,
                multiple: 2,
            },
        },
        {
            key: '4',
            title: 'Issues Submitted',
            dataIndex: 'issuesSubmitted',
            sorter: {
                compare: (a, b) => a.issuesSubmitted - b.issuesSubmitted,
                multiple: 1,
            },
        },
        {
            key: '5',
            title: 'Action',
            render: (record) => <p style={{ color: 'red', cursor: 'pointer', backgroundColor: '' }} onClick={() => handleDelete(record)}>Delete</p>
        },
    ];

    const handleDelete = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this student record?",
            okText: "Yes",
            okType: "danger",
            
            onOk: () => setEmployees((employee) => employee.filter((e) => e.id !== record.id)),
        })
    }
        
    // const employeeIndex = employees.findIndex(e => e.id == record.id);
    //             const NewEmployeesArray = [...employees];
    //             NewEmployeesArray.splice(employeeIndex, 1);
    //             setEmployees(NewEmployeesArray);

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    const openAddEmployeeForm = () => {
        !isAddingEmployee && setIsAddingEmployee(true)
    }
    const closeAddEmployeeForm = () => {
        isAddingEmployee && setIsAddingEmployee(false)
    }

    const addEmployee = (employee) => {
        if (employee) {
            setEmployees([...employees, { id: Math.floor(Math.random() * 1000).toString(), ...employee, workingOn: 0, finished: 0, issuesSubmitted: 0 }])
            setIsAddingEmployee(false)
        }
        console.log(employee)
    }

    return <>
        {isAddingEmployee && <AddEmployeePopup closeAddEmployeeForm={closeAddEmployeeForm} addEmployee={addEmployee} />}

        <Tabs page='employees' />
        <EmployeesToolsBar openAddEmployeeForm={openAddEmployeeForm} />

        <div className='employees-container' >
            <Table columns={columns} dataSource={employees} onChange={onChange} className='employees-table' />
        </div>
    </>;
};

export default Employees;
