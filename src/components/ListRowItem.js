import '../assets/style/styles.css';
import { Checkbox } from './Checkbox';
import React, { useState } from 'react';

export const ListRowItem = ({title, reason, time, firstChecked}) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='list-row-item'>
            <Checkbox value={firstChecked} onChange={setIsChecked} />
            <span className='list-row-item-draft'>Draft</span>
            <span className='list-row-item-title'>
                {title}
                <span className='list-row-item-reason'>
                    {reason}
                </span>
            </span>
            <span className='list-row-item-time'>{time}</span>
        </div>
    );
};