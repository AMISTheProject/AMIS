import '../assets/style/styles.css';
import React, { useState } from 'react';
import arrow from '../assets/images/left-arrow-icon.png';
import { PrimaryButton } from './PrimaryButton';

export const AssetApprovalListRow = ({title, placeholder}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand() {
        console.log(isExpanded);
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='asset-approval-row-container'>
            <div className='asset-screen-input-container'>
                <label className='asset-screen-input-label' for="category">{title}</label>
                <input className='asset-screen-input-field-prefixed' type="text" id="category" name="category" value={placeholder} disabled='true'></input>
            </div>

            <div className='asset-approval-details-button' onClick={toggleExpand}>
                <span style={{color: '#555'}}>View details</span>
                <img src={arrow} height='20px' width='20px' className={`asset-approval-row-arrow ${isExpanded ? 'exp' : ''}`}/>
            </div>

            {isExpanded && (
                <div className='asset-approval-details-container'>
                    <p>Do you want to approve the specific input value or reject it? Please, add a comment to let the creator know your reasoning behind this.</p>
                    <div className='asset-approval-comment-container'>
                        <input className='asset-screen-input-field' id="reason" name="reason" placeholder='Add a comment (optional)' />
                        <PrimaryButton color='#fff' bgColor='#EB3131' text='Approve' />
                        <PrimaryButton color='#fff' bgColor='#000' text='Reject' />
                    </div>
                </div>
                )
            }
        </div>
    );
};