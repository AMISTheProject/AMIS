import '../assets/style/styles.css';
import refreshIcon from '../assets/images/refresh-icon.svg';
import binIcon from '../assets/images/bin-icon.svg';
import arrow from '../assets/images/left-arrow-icon.png';
import { Checkbox } from '../components/Checkbox';
import React, { useState } from 'react';

export const Drafts = () => {
    const [headerCheckboxChecked, setHeaderCheckboxChecked] = useState(false);

    return (
        <div className='drafts-container'>
            <div className='drafts-header'>
                <div className='drafts-header-left'>
                    <Checkbox value={headerCheckboxChecked} onChange={setHeaderCheckboxChecked}/>
                    <img src={refreshIcon} width='25px' height='25px' />
                    <img src={binIcon} width='25px' height='25px' />
                </div>
                
                <div className='drafts-header-right'>
                    <span className='drafts-header-text'>2 drafts shown in this page</span>
                    <img src={arrow} width='30px' height='30px' style={{opacity: 0.65}}/>
                    <span className='drafts-header-text'>Page 1 of 1</span>
                    <img src={arrow} width='30px' height='30px' style={{opacity: 0.65, transform: 'rotate(180deg)'}}/>
                </div>
            </div>

            <div className='drafts-content'>

            </div>
        </div>
    );
};