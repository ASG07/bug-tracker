import React, { useState } from 'react';
import Link from 'next/link';

const CreateGroupForm = ({isCreateFormOpen}) => {
  return <>
      <Link href='/'><a><button className='landingPage-container__block__button'>Create Group</button></a></Link>
  </>;
};

export default CreateGroupForm;
