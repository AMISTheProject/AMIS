import '../assets/style/styles.css';
import { ApprovalsListRow } from '../components/ApprovalsListRow';
import { PrimaryButton } from '../components/PrimaryButton';

export const Approvals = () => {
    return (
        <div className='drafts-container'>
            <div className='drafts-header'>
                <div className='drafts-header-left'>
                    <h4 className='approvals-header-text'>April's Assets Under Construction</h4>
                </div>

                <div className='drafts-header-right'>
                    <PrimaryButton color='#fff' bgColor='#EB3131' text='Merge All' />
                </div>
            </div>

            <div className='drafts-content'>
                <ApprovalsListRow 
                    title='Asset Under Construction 1' 
                    time='April 30, 2024' 
                /> 
                <ApprovalsListRow 
                    title='Asset Under Construction 2' 
                    time='April 29, 2024' 
                /> 
                <ApprovalsListRow 
                    title='Asset Under Construction 3' 
                    time='April 28, 2024' 
                /> 
                <ApprovalsListRow 
                    title='Asset Under Construction 4' 
                    time='April 20, 2024' 
                /> 
                <ApprovalsListRow 
                    title='Asset Under Construction 5' 
                    time='April 11, 2024' 
                /> 
            </div>
        </div>

    );
};
