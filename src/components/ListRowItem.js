import '../assets/style/styles.css';
import { Checkbox } from './Checkbox';
import React, { useEffect, useState } from 'react';

export const ListRowItem = ({ title, reason, time, firstChecked, onCheckboxChange }) => {
    const [isChecked, setIsChecked] = useState(firstChecked);

    useEffect(() => {
        setIsChecked(firstChecked);
    }, [firstChecked]);

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
        onCheckboxChange(checked);
    };

    return (
        <div className='list-row-item'>
            <Checkbox value={isChecked} onChange={handleCheckboxChange} />
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
