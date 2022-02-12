import React, { useEffect, useState } from 'react'
import { IoClose, } from "react-icons/io5";


const InfoPopup = ({ closeInfo, selectedId, cards, employees }) => {
    //const [isLoaded, setIsLoaded] = useState(false);
    const card = cards.filter(card => card.id == selectedId)[0]
    const [isEmployeeDeleted, setIsEmployeeDeleted] = useState(false);
    let employee = employees.filter(emp => emp.id == card.employeeId)
    if(employee.length > 0){
        //employee found
        isEmployeeDeleted == true && setIsEmployeeDeleted(false)
        employee = employee[0];
    }else{
        //employee deleted
        isEmployeeDeleted == false && setIsEmployeeDeleted(true)
    }
    
    
    console.log(employee)




    return (<>
    <div className='mask' onClick={(e) => e.currentTarget === e.target && closeInfo()}>
            <div className='info-frame'>
                <div className='info-frame__exit-button' onClick={() => closeInfo()}><IoClose size={20} /></div>
                <div className={`infoPopup  infoPopup--` + card.priority}>
                    <h1 className='infoPopup__title'>{card.title}</h1>
                    <p className='infoPopup__subtitle'>Priority:</p>
                    <p className='infoPopup__info priority'>{card.priority}</p>

                    <p className='infoPopup__subtitle'>Date:</p>
                    <p className='infoPopup__info'>{card.date.getDate()}/{card.date.getMonth() + 1}/{card.date.getFullYear()}</p>

                    <p className='infoPopup__subtitle'>Description:</p>
                    <p className='infoPopup__info'>{card.description}</p>

                    <p className='infoPopup__subtitle'>Employee:</p>
                    <div className='infoPopup__employee'>
                        <h4 className='infoPopup__employee__name'>{card.employee}   {isEmployeeDeleted && '(Deleted)'}</h4>
                        <div className='infoPopup__employee__info'>
                            <p><span className='infoPopup__employee__info__subtitle'>ID</span><br /><span className='infoPopup__employee__info__info'>{isEmployeeDeleted? 'Not Available' : employee.id}</span></p>
                            <p><span className='infoPopup__employee__info__subtitle'>Working on</span><br /><span className='infoPopup__employee__info__info'>{isEmployeeDeleted? 'Not Available' : employee.workingOn}</span></p>
                            <p><span className='infoPopup__employee__info__subtitle'>Finished</span><br /><span className='infoPopup__employee__info__info'>{isEmployeeDeleted? 'Not Available' : employee.finished}</span></p>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
    )
}

export default InfoPopup
