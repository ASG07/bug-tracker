import React from 'react'
import { IoClose, } from "react-icons/io5";


const InfoPopup = ({ closeInfo, selectedId, cards, isMoreInfoOn }) => {
    const card = cards.filter(card => card.id == selectedId)[0]
    //console.log(card)

    return (
        <div className={`info-container`}>
            <div className='info-frame'>
                <div className='info-frame__exit-button' onClick={() => closeInfo()}><IoClose size={20}/></div>
                <div className={`infoPopup  infoPopup--` + card.priority}>

                    <h1 className='infoPopup__title'>{card.name}</h1>
                    <p className='infoPopup__subtitle'>Priority:</p>
                    <p className='infoPopup__info priority'>{card.priority}</p>

                    <p className='infoPopup__subtitle'>Date:</p>
                    <p className='infoPopup__info'>{card.date.getDate()}/{card.date.getMonth() + 1}/{card.date.getFullYear()}</p>

                    <p className='infoPopup__subtitle'>Description:</p>
                    <p className='infoPopup__info'>{card.description}</p>

                    <p className='infoPopup__subtitle'>Employee:</p>
                    <div className='infoPopup__employee'>
                        <h4 className='infoPopup__employee__name'>Ahmed Sameer</h4>
                        <div className='infoPopup__employee__info'>
                            <p><span className='infoPopup__employee__info__subtitle'>ID</span><br /><span className='infoPopup__employee__info__info'>9928</span></p>
                            <p><span className='infoPopup__employee__info__subtitle'>Working on</span><br /><span className='infoPopup__employee__info__info'>3</span></p>
                            <p><span className='infoPopup__employee__info__subtitle'>Finished</span><br /><span className='infoPopup__employee__info__info'>4</span></p>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default InfoPopup
