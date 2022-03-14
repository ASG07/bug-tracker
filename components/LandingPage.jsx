import React, { useState } from 'react';
import Link from 'next/link';
import CreateGroupForm from '../components/CreateGroupForm'
import JoinGroupForm from '../components/JoinGroupForm'

const LandingPage = () => {
    const [isJoinFormOpen, setIsJoinFormOpen] = useState(false);
    const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
    return <>
        <div className='landingPage-container'>
            <div className='landingPage-container__block first'>
                <JoinGroupForm isJoinFormOpen={isJoinFormOpen}></JoinGroupForm>
            </div>
            <div className='landingPage-container__block'>
                <CreateGroupForm isCreateFormOpen={isCreateFormOpen}></CreateGroupForm>
            </div>
            {/* <div className='landingPage-container__'></div> */}
        </div>
    </>;
};

export default LandingPage;
