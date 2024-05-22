import '../assets/style/styles.css';
import { NotificationListRow } from '../components/NotificationListRow';
import { Checkbox } from '../components/Checkbox';
import bell from '../assets/images/notif.png';
import share from '../assets/images/share-icon-gray.svg';
import star from '../assets/images/star-icon.svg';
import bin from '../assets/images/bin-icon.svg'
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
                <ChipButton text={'Mark'}  icon={star} />
                <ChipButton text={'Share'} icon={share} />
                <ChipButton text={'Delete'} icon={bin} />
            </div>

            <div className='notifications-content'>
                <NotificationListRow user='AMIS' title='April Report' headerCheckboxStatus={allSelected} desc="Dear Plant Engineer, This email is to inform you that the montly equipment report is now available in the AMIS system. The report provides a summary of key metrics for all monitored equipment..."/>
                <NotificationListRow user='Takis' title='Quarter Report' headerCheckboxStatus={allSelected} desc="Thank you for bringing your asset report to my attention. I appreciate your proactive approach to using AMIS for in-depth analysis. The focus on CAPEX Management is valuable, and I believe it can definitely help us with financial resource planning."/>
                <NotificationListRow user='BSO' title='Assets Under Creation' headerCheckboxStatus={allSelected} desc="AUC Data Received for April. Waiting for your next registries. Best Regards, BSO Team."/>
                <NotificationListRow user='AMIS' title='Extraction Completed' headerCheckboxStatus={allSelected} desc="May's Customized Asset Report Extracted Succesfully."/>
            </div>
        </div>
    );
};