import React from 'react'
import { useState } from 'react'
import Column from './Column'
import InfoPopup from './InfoPopup'
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import ToolsBar from './ToolsBar';





const Main = () => {

    const cardsArray = [
        {
            id: '0',
            name: 'iphone does not unlock after swiping',
            priority: 'very-high',
            date: new Date('2019-06-28'),
            description: 'sometimes when the user disable the bluetooth functiuality then lock the phone, the phone wont unlock after swiping',
            employee: 'Ahmed Sameer',
            state: 'analysis'
        },
        {
            id: '1',
            name: 'viewport does not fit screen size',
            priority: 'normal',
            date: new Date('2005-06-28'),
            description: 'sometimes when the user disable the bluetooth functiuality then lock the phone, the phone wont unlock after swiping',
            employee: 'Ahmed Sameer',
            state: 'finished'
        },
        {
            id: '1',
            name: 'automatic sleep mode does not work sometimes',
            priority: 'normal',
            date: new Date('2020-06-28'),
            description: 'sometimes when the user disable the bluetooth functiuality then lock the phone, the phone wont unlock after swiping',
            employee: 'Ahmed Sameer',
            state: 'inProgress'
        },
        {
            id: '1',
            name: 'iphone does not unlock after swiping',
            priority: 'very-high',
            date: new Date('2016-06-28'),
            description: 'sometimes when the user disable the bluetooth functiuality then lock the phone, the phone wont unlock after swiping',
            employee: 'Ahmed Sameer',
            state: 'finished'
        },
        {
            id: '2',
            name: 'iphone does not unlock after swiping',
            priority: 'high',
            date: new Date('2015-06-28'),
            description: 'sometimes when the user disable the bluetooth functiuality then lock the phone, the phone wont unlock after swiping',
            employee: 'Ahmed Sameer',
            state: 'inProgress'
        },
        {
            id: '3',
            name: 'screen does not fit properly on android',
            priority: 'very-high',
            date: new Date('2019-06-28'),
            description: 'sometimes when the user disable the bluetooth functiuality then lock the phone, the phone wont unlock after swiping',
            employee: 'Ahmed Sameer',
            state: 'inProgress'
        },
        {
            id: '4',
            name: 'background color in dark mode is too dark',
            priority: 'normal',
            date: new Date('2022-06-28'),
            description: 'sometimes when the user disable the bluetooth functiuality then lock the phone, the phone wont unlock after swiping',
            employee: 'Ahmed Sameer',
            state: 'inProgress'
        }
    ]



    const [cards, setCards] = useState(cardsArray);

    const [isMoreInfoOn, setIsMoreInfoOn] = useState(false)

    const [filterBy, setFilterBy] = useState('none')
    const [sortBy, setSortBy] = useState('none')


    const [name, setName] = useState();
    const [priority, setPriority] = useState();
    const [employee, setEmployee] = useState();
    const [state, setState] = useState();

    const [selectedId, setSelectedId] = useState();



    const closeInfo = () => {
        isMoreInfoOn && setIsMoreInfoOn(() => !isMoreInfoOn)
    }

    const openInfo = (id) => {
        if (!isMoreInfoOn) {
            setIsMoreInfoOn(() => !isMoreInfoOn)
        }
        
        setSelectedId(id)
    }

    const getInfo = (id) => {

    }

    return (
        <div>
            {isMoreInfoOn && <InfoPopup closeInfo={closeInfo} selectedId={selectedId} cards={cards} isMoreInfoOn={isMoreInfoOn}></InfoPopup>}
            {isMoreInfoOn && <div className='mask' onClick={() => isMoreInfoOn && closeInfo()}></div>}

            <div className='main-container'>
                <ToolsBar filterBy={filterBy} setFilterBy={setFilterBy} sortBy={sortBy} setSortBy={setSortBy}></ToolsBar>

                <div className='cards-container' >
                    <Column state='analysis' cards={cards} openInfo={openInfo} filterBy={filterBy} sortBy={sortBy}></Column>
                    <Column state='inProgress' cards={cards} openInfo={openInfo} filterBy={filterBy} sortBy={sortBy}></Column>
                    <Column state='finished' cards={cards} openInfo={openInfo} filterBy={filterBy} sortBy={sortBy}></Column>
                </div>
            </div>
        </div>
    )
}

export default Main
