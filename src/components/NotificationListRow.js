import '../assets/style/styles.css';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import arrow from '../assets/images/left-arrow-icon.png';

export const NotificationListRow = ({user, title, desc}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='notif-row-container'>
            <div className='notif-row-header'>
                <div className='notif-check'>
                    <Checkbox value={isSelected} onChange={setIsSelected}/>
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
                    Hello Solon! The automated Report for April is ready... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, arcu quis scelerisque laoreet, metus purus commodo velit, sed imperdiet tellus tellus vel tortor. Praesent eget fermentum arcu, vitae mattis odio. Maecenas semper porta tempor. Nam elementum gravida felis ac semper. Sed vitae pretium arcu.
                </p>
            </div>
        </div>
    );
};