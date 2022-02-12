import React from 'react'
import { useState } from 'react'
import Column from './Column'
import InfoPopup from './InfoPopup'
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import MainToolsBar from './MainToolsBar';
import AddCardPopup from './AddCardPopup';
import { cardsArray } from '../data/cards';
import { employeesArray } from '../data/employees';
import { IoDuplicateOutline } from 'react-icons/io5';

import Tabs from './Tabs';
import Frame from './Frame';

import Router from 'next/router';
import Link from 'next/link';


const Main = ({ data }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { cards, setCards, employees, setEmployees } = data

    const [state, setState] = useState();

    // const [cards, setCards] = useState(cardsArray);
    // const [employees, setEmployees] = useState(employeesArray);

    const [isMoreInfoOn, setIsMoreInfoOn] = useState(false)
    const [isAddingCard, setIsAddingCard] = useState(false)

    const [selectedId, setSelectedId] = useState();

    const [filterBy, setFilterBy] = useState('none')
    const [sortBy, setSortBy] = useState('none')

    const addCard = (card) => {
        const data = { ...card, date: new Date(), id: Math.floor(Math.random() * 10000).toString(), employee: employees.find(e => e.id == card.employeeId).name }
        setCards([...cards, data])

        const employeeIndex = employees.findIndex(e => e.id == card.employeeId)
        const updatedEmployee = employees[employeeIndex]
        updatedEmployee.workingOn++
        const newEmployeesArray = [...employees]
        newEmployeesArray[employeeIndex] = { ...employees[employeeIndex], workingOn: updatedEmployee.workingOn }
        console.log(employeeIndex)
        console.log(updatedEmployee)
        console.log(newEmployeesArray)
        setEmployees(newEmployeesArray)
        setIsAddingCard(false)
    }

    const closeInfo = () => {
        isMoreInfoOn && setIsMoreInfoOn(() => !isMoreInfoOn)
    }
    const openInfo = (id) => {
        !isMoreInfoOn && setIsMoreInfoOn(() => !isMoreInfoOn)
        setSelectedId(id)
    }


    const closeAddCardForm = () => {
        isAddingCard && setIsAddingCard(() => !isAddingCard)
    }
    const openAddCardForm = () => {
        !isAddingCard && setIsAddingCard(() => !isAddingCard)
    }

    return (
        <>
            {isMoreInfoOn && <InfoPopup employees={employees} closeInfo={closeInfo} selectedId={selectedId} cards={cards} ></InfoPopup>}
            {isAddingCard && <AddCardPopup addCard={addCard} employees={employees} closeAddCardForm={closeAddCardForm} />}



            <Tabs page='index' />
            <MainToolsBar filterBy={filterBy} setFilterBy={setFilterBy} openAddCardForm={openAddCardForm} sortBy={sortBy} setSortBy={setSortBy}></MainToolsBar>

            <div className='cards-container'>
                <Column state='analysis' cards={cards} openInfo={openInfo} filterBy={filterBy} sortBy={sortBy}></Column>
                <Column state='inProgress' cards={cards} openInfo={openInfo} filterBy={filterBy} sortBy={sortBy}></Column>
                <Column state='finished' cards={cards} openInfo={openInfo} filterBy={filterBy} sortBy={sortBy}></Column>
            </div>



        </>
    )
}

export default Main
