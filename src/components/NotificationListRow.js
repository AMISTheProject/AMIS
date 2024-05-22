import '../assets/style/styles.css';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import arrow from '../assets/images/left-arrow-icon.png';

export const NotificationListRow = ({user, title, desc, headerCheckboxStatus}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='notif-row-container'>
            <div className='notif-row-header'>
                <div className='notif-check'>
                    <Checkbox value={headerCheckboxStatus} onChange={setIsSelected}/>
                </div>

                <div className='notif-user-container'>
                    <span className='notif-user'>@{user}</span>
                </div>

                <span className='notif-title'>{title}</span>

                <div className='notif-details-button' onClick={toggleExpand}>
                    <span>View details</span>
                    <img src={arrow} height='20px' width='20px' className={`notif-details-arrow ${isExpanded ? 'exp' : ''}`}/>
                </div>
            </div>

            <div className='notif-details-container' hidden={!isExpanded}>
                <p className='notif-details-text'>
                    {desc}
                </p>
            </div>
        </div>
    );
};