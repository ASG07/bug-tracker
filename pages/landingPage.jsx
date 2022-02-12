import React, {useState} from 'react';

const landingPage = () => {
    return <>
        <div className='landingPage-container'>
            <div className='landingPage-container__block first'>
                <button className='landingPage-container__block__button'>Join Group</button>
            </div>
            <div className='landingPage-container__block'>
                <button className='landingPage-container__block__button'>Create Group</button>
            </div>
            {/* <div className='landingPage-container__'></div> */}
        </div>
    </>;
};

export default landingPage;
