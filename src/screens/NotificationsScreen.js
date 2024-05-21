import '../assets/style/styles.css';
import { NotificationListRow } from '../components/NotificationListRow';
import { Checkbox } from '../components/Checkbox';
import bell from '../assets/images/notif.png';
import share from '../assets/images/share.png';
import { ChipButton } from '../components/ChipButton';
import React, { useState } from 'react';
import { ToggleSwitch } from '../components/ToggleSwitch';

export const NotificationsScreen = () => {
    const [areNotifAllowed, setAreNotifAllowed] = useState(true);
    const [allSelected, setAllSelected] = useState(false);
    const [value, setValue] = useState(false);

    return (
        <div className='notifications-container'>
            <div className='notifications-header'>
                <div className='notifications-header-vbox'>
                    <h2 className='notifications-title'>Inbox</h2>
                    <div>
                        <span>5 messages</span>
                        <span style={{marginLeft: 10, color: '#555'}}>2 unread</span>
                    </div>
                </div>

                <div className='notifications-perm-container'>
                    <img src={bell} width='25px' height='25px'/>

                    <div className='notifications-perm-text-container'>
                        <span className='notifications-perm-title'>Push Notifications</span>
                        <span className='notifications-perm-p'>Automatically send new notifications</span>
                    </div>

                
                    <div> 
                        <ToggleSwitch 
                                isOn={value}
                                onColor="#EB3131"
                                handleToggle={() => setValue(!value)}/>
                    </div>
                    
                </div>
            </div>

            <input className='asset-screen-input-field' id="search" name="search" placeholder='Search' />

            <div className='notifications-actions'>
                <Checkbox value={allSelected} onChange={setAllSelected}/>
                <ChipButton text={'Mark'} icon={share} />
                <ChipButton text={'Share'} icon={share} />
                <ChipButton text={'Delete'} icon={share} />
            </div>

            <div className='notifications-content'>
                <NotificationListRow user='AMIS' title='April Report'/>
                <NotificationListRow user='Takis' title='Quarter Report'/>
                <NotificationListRow user='BSO' title='Assets Under Creation'/>
                <NotificationListRow user='AMIS' title='Extraction Completed'/>
            </div>
        </div>
    );
};