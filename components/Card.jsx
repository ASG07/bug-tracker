import React from 'react'

const Card = ({ card, openInfo}) => {
    return (
        <div onClick={() => openInfo(card.id)} className={`cards-container__column__body__card cards-container__column__body__card--` + card.priority}>
            <div className='cards-container__column__body__card__name'>
                <h3>{card.title}</h3>
            </div>
            <div className='cards-container__column__body__card__date'>
                <p><span className='subtitle'>priority:</span><br /><span className='priority'>{card.priority}</span></p>
            </div>
            <div className='cards-container__column__body__card__date'>
                <p><span className='subtitle'>open date:</span><br />{card.date.getDate()}/{card.date.getMonth() + 1}/{card.date.getFullYear()}</p>
            </div>
            <div className='cards-container__column__body__card__employee'>
                <p><span className='subtitle'>Assigned to:</span><br /><span className='employee'>{card.employee}</span></p>
            </div>
        </div>
    )
}

export default Card
