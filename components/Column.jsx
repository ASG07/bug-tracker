import React, { useEffect, useState } from 'react'
import Card from './Card'

const Column = ({ cards, state, openInfo, filterBy, sortBy }) => {
    const [displayCards, setDisplayCards] = useState([])

    const sortByPriority = (a, b) => {
        if (a.priority == 'very-high' && b.priority == 'high') {
            return -1
        }
        if (a.priority == 'very-high' && b.priority == 'normal') {
            return -1
        }
        if (a.priority == 'very-high' && b.priority == 'low') {
            return -1
        }

        if (a.priority == 'high' && b.priority == 'normal') {
            return -1
        }
        if (a.priority == 'high' && b.priority == 'low') {
            return -1
        }

        if (a.priority == 'normal' && b.priority == 'low') {
            return -1
        }
        else {
            return 1
        }
    }

    const sortByDate = (a, b) => {
        return a.date > b.date ? -1 : 1;
    }

    const sortByName = (a, b) => {
        return a.name > b.name ? 1 : -1;
    }


    useEffect(() => {
        let filteredCards = [...cards];

        filteredCards = filteredCards.filter(card => card.state == state)
        if (filterBy != 'none' && filterBy) {
            console.log('entered filter zone');
            filteredCards = filteredCards.filter(card => card.priority == filterBy)

        }


        if (sortBy != 'none') {
            switch (sortBy) {
                case 'date':
                    filteredCards.sort((a, b) => sortByDate(a, b))
                    break;
                case 'name':
                    filteredCards.sort((a, b) => sortByName(a, b))
                    break;
                case 'priority':
                    filteredCards.sort((a, b) => sortByPriority(a, b))
                    break;
            }
        }

        setDisplayCards([...filteredCards])
    }, [filterBy, sortBy])


    return (
        <div className='cards-container__column'>

            <div className='cards-container__column__header'>
                <h4>{state}</h4> <p>{displayCards.length}</p>
            </div>

            <div className='cards-container__column__body'>
                {/* {getCards(cards,filterBy,sortBy,state)} */}
                {displayCards.map(card => <Card key={card.id} card={card} openInfo={openInfo}></Card>)}
                {/* {cards.map(card => card.state == state && <Card key={card.id} card={card} openInfo={openInfo}></Card>)} */}
            </div>

        </div>
    )
}

export default Column
