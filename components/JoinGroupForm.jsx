import React, { useState } from 'react';
import Link from 'next/link';

const JoinGroupForm = ({isJoinFormOpen}) => {
  
  return <>
    <Link href='/'><a><button className='landingPage-container__block__button'>Join Group</button></a></Link>
    {isJoinFormOpen && <form>a</form>}
  </>;
};

export default JoinGroupForm;
