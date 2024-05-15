import '../assets/style/styles.css';
import { AssetScreen } from './AssetScreen';
import { PrimaryButton } from '../components/PrimaryButton';

import groupIcon from '../assets/images/group-by-icon.png';

export const AUC = () => {
    return (
        <div className='auc-container'>
            <div className='auc-sidebar'>
                <div className='auc-sidebar-main-content'>
                    <div className='auc-sidebar-title-container'>
                        <h3 className='auc-sidebar-title'>Assets</h3>
                        <img src={groupIcon} alt='Group' width='25px' height='25px'/>
                    </div>

                    <ul className='auc-sidebar-list'>
                        <li className='auc-sidebar-list-item'>AUC 1</li>
                        <li className='auc-sidebar-list-item active'>AUC 2</li>
                        <li className='auc-sidebar-list-item'>AUC 3</li>
                    </ul>
                </div>

                <div className='auc-sidebar-button-container'>
                    <PrimaryButton text='Add new asset' color='#000' bgColor='#e6e6e6' className='auc-sidebar-button'/> 
                </div>
            </div>

            <div className='auc-page'>
                <AssetScreen title='AUC 2' />
            </div>
        </div>
    );
};