import '../assets/style/styles.css';
import { Checkbox } from '../components/Checkbox';
import { PrimaryButton } from '../components/PrimaryButton';
import { NavLink } from 'react-router-dom'; 
import React, { useState, useEffect, useContext } from 'react';


const plantEngineerReportFields = [
    'Acquisition Value',
    'Asset Super Number',
    'Plant name',
    'Category (I/M)',
    'Category',
    'WBS Element',
    'WBS Description',
    'Project Engineer',
    'Cost Center',
    'Currency',
    'Book Value',
    'Purchase Order (PO)',
    'PO Line',
    'PO Line Description',
    'Estimated completion date based on RFA',
    'Depreciated Value',
    'Reason for extension',
    'Extension of useful life (months)'
]

const bsoReportFields = [
    'Accumulated Depreciation - Machinery',
    'Capital Work in Progress - Machinery',
    'Depreciation Expenses',
    'Gain on Disposal of Assets',
    'Impairment Loss - Machinery',
    'Machinery Spare Parts Inventory',
    'Maintenance & Repairs Expenses',
    'Revaluation Surplus',
    'Lease Liability',
    'Asset Retirement Obligation',
    'Cash and Cash Equivalents',
    'Inventory (net)',
    'Prepaid Expenses',
    'Accounts Receivable (net)',
    'Property, Plant, and Equipment (PPE) (net)',
    'Land',
    'Buildings',
    'Liabilities'
    ];

export const ReportCreation = () => {
    const [fields, setFields] = useState(plantEngineerReportFields);
    const { role, setRole } = useContext(RoleContext);
    useEffect(() => {
        function dynamicComponentLoad() {
            if(role === 'business-services-organization') {
               setFields(bsoReportFields);
            }
        }
        dynamicComponentLoad();
    }, []);
    
    return (
        <div className='report-creation-container'>
            <div className='report-creation-header'>
                <h4 className='report-creation-header-title'>Report Fields</h4>
                <NavLink to='/reports'>
                    <PrimaryButton bgColor='#EB3131' color='#fff' text='Create Report' />
                </NavLink>
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