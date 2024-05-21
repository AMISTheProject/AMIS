import '../assets/style/styles.css';
import { Checkbox } from '../components/Checkbox';
import { PrimaryButton } from '../components/PrimaryButton';

export const ReportCreation = () => {
    return (
        <div className='report-creation-container'>
            <div className='report-creation-header'>
                <h4 className='report-creation-header-title'>Report Fields</h4>
                <PrimaryButton bgColor='#EB3131' color='#fff' text='Create Report' />
            </div>

            <div className='report-creation-actions'>
                <div className='report-creation-date'>
                    <span>Choose the desired period</span>
                    <input className='report-creation-input-field' id="from" name="from" placeholder='From' />
                    <input className='report-creation-input-field' id="to" name="to" placeholder='To' />
                </div>
                <span className='report-creation-select'>Select All</span>
            </div>

            <div className='report-creation-content'>
                <div className='report-creation-half'>
                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Accumulated Depreciation - Machinery</span>
                    </div>

                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Capital Work in Progress - Machinery</span>
                    </div>

                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Depreciation Expenses</span>
                    </div>

                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Gain on Disposal of Assets</span>
                    </div>

                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Impairment Loss - Machinery</span>
                    </div>
                </div>

                <div className='report-creation-half'>
                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Machinery Spare Parts Inventory</span>
                    </div>

                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Maintenance & Repairs Expenses</span>
                    </div>

                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Revaluation Surplus</span>
                    </div>

                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Lease Liability</span>
                    </div>

                    <div className='report-creation-check-item'>
                        <Checkbox />
                        <span className='report-creation-check-text'>Asset Retirement Obligation</span>
                    </div>
                </div>
            </div>
        </div>
    );
};