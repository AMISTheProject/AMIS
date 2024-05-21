import '../assets/style/styles.css';
import { PrimaryButton } from '../components/PrimaryButton';
import { AssetApprovalListRow } from '../components/AssetApprovalListRow';

export const AssetApproval = () => {
    return (
        <div className='asset-approval-container'>
            <div className='asset-approval-header'>
                <span className='asset-approval-header-text'>Quick Actions</span>
                <PrimaryButton color='#fff' bgColor='#000' text='Reject All' />
                <PrimaryButton color='#fff' bgColor='#EB3131' text='Merge All' />
            </div>

            <div className='asset-approval-content'>
                <AssetApprovalListRow title='Category (M/I)' placeholder='Improvement'/>
                <AssetApprovalListRow title='Date' placeholder='12/04/2024'/>
                <AssetApprovalListRow title='Main Asset Number' placeholder='565654258'/>
                <AssetApprovalListRow title='Extension of useful life' placeholder='Yes'/>
                <AssetApprovalListRow title='Period (months)' placeholder='42'/>

            </div>
        </div>
    );
};