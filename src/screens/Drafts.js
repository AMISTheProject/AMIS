import '../assets/style/styles.css';
import refreshIcon from '../assets/images/refresh-icon.svg';
import binIcon from '../assets/images/bin-icon.svg';
import arrow from '../assets/images/left-arrow-icon.png';
import { Checkbox } from '../components/Checkbox';
import { ListRowItem } from '../components/ListRowItem';
import React, { useState } from 'react';

export const Drafts = () => {
    const [headerCheckboxChecked, setHeaderCheckboxChecked] = useState(false);
    const [itemCheckedState, setItemCheckedState] = useState([
        false, false, false, false, false
    ]);

    const handleHeaderCheckboxChange = (checked) => {
        setHeaderCheckboxChecked(checked);
        setItemCheckedState(itemCheckedState.map(() => checked));
    };

    const handleItemCheckboxChange = (index, checked) => {
        const newItemCheckedState = [...itemCheckedState];
        newItemCheckedState[index] = checked;
        setItemCheckedState(newItemCheckedState);

        // Update header checkbox state based on individual checkboxes
        const allChecked = newItemCheckedState.every(state => state);
        const noneChecked = newItemCheckedState.every(state => !state);
        if (allChecked || noneChecked) {
            setHeaderCheckboxChecked(allChecked);
        } else {
            setHeaderCheckboxChecked(false);
        }
    };

    return (
        <div className='drafts-container'>
            <div className='drafts-header'>
                <div className='drafts-header-left'>
                    <Checkbox value={headerCheckboxChecked} onChange={handleHeaderCheckboxChange} />
                    <img src={refreshIcon} className="auc-side-bar-group-icon" width='25px' height='25px' />
                    <img src={binIcon} className="auc-side-bar-group-icon" width='25px' height='25px' />
                </div>
                
                <div className='drafts-header-right'>
                    <span className='drafts-header-text'>2 drafts shown on this page</span>
                    <img src={arrow} className="auc-side-bar-group-icon" width='30px' height='30px' style={{opacity: 0.65}} />
                    <span className='drafts-header-text'>Page 1 of 1</span>
                    <img src={arrow} className="auc-side-bar-group-icon" width='30px' height='30px' style={{opacity: 0.65, transform: 'rotate(180deg)'}} />
                </div>
            </div>

            <div className='drafts-content'>
                {itemCheckedState.map((isChecked, index) => (
                    <ListRowItem 
                        key={index}
                        className="draft-box" 
                        title={`Assets Under Construction Report ${index + 1}`} 
                        reason='Saved due to inaction' 
                        time={`13:4${8-index}`} 
                        firstChecked={isChecked}
                        onCheckboxChange={(checked) => handleItemCheckboxChange(index, checked)}
                    />
                ))}
            </div>
        </div>
    );
};
