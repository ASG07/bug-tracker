import Link from 'next/link';
import React from 'react';


const Tabs = ({ page }) => {
    if (page == 'employees') {
        return <>
            <div className='tabs'>
                <Link href="/"><h3 className='tabs__tab tabs__tab--not-selected'>Main</h3></Link>
                <h3 className='tabs__tab tabs__tab--selected'>Employees</h3>
            </div>
        </>
    }
    else {
        return <>
            <div className='tabs'>
                <h3 className='tabs__tab tabs__tab--selected'>Main</h3>
                <Link href="/employees"><h3 className='tabs__tab tabs__tab--not-selected'>Employees</h3></Link>
            </div>
        </>;
    }

};

export default Tabs;
