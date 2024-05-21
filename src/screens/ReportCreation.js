import '../assets/style/styles.css';
import { Checkbox } from '../components/Checkbox';
import { PrimaryButton } from '../components/PrimaryButton';
import { NavLink } from 'react-router-dom'; 
import React, { useState, useEffect, useContext } from 'react';
import RoleContext from '../Context';

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
];

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
    const [checkedFields, setCheckedFields] = useState({});
    const { role } = useContext(RoleContext);

    useEffect(() => {
        if(role === 'business-services-organization') {
            setFields(bsoReportFields);
        }
    }, [role]);

    const handleCheckboxChange = (label, isChecked) => {
        setCheckedFields(prevState => ({
            ...prevState,
            [label]: isChecked
        }));
    };

    return (
        <div className='report-creation-container'>
            <div className='report-creation-header'>
                <div className='report-creation-date'>
                    <span>Choose the desired period</span>
                    <input className='report-creation-input-field' id="from" name="from" placeholder='From' />
                    <input className='report-creation-input-field' id="to" name="to" placeholder='To' />
                </div>
                
                <PrimaryButton className=".red-button" bgColor='#EB3131' color='#fff' text='Create Report' />
                
            </div>

            <div className='report-creation-actions'>
                <div className='report-creation-actions-half' style={{width: role !== 'business-services-organization' ? '50%' : '100%'}}>
                    <h4 className='report-creation-header-title'>Report Fields</h4>
                    <span className='report-creation-select'>Select All</span>
                </div>

                {
                    role !== 'business-services-organization' &&
                    <div className='report-creation-actions-half'>
                        <h4 className='report-creation-header-title'>Calculations</h4>
                        <span className='report-creation-select'>Select Default</span>
                    </div>
                }
            </div>

            <div className='report-creation-content'>
                <div className='report-creation-half'>
                    {
                        fields.slice(0, fields.length / 2).map((label, index) => (
                            <div key={index} className='report-creation-check-item'>
                                <Checkbox 
                                    value={checkedFields[label] || false}
                                    onChange={(isChecked) => handleCheckboxChange(label, isChecked)}
                                />
                                <span className='report-creation-check-text'>{label}</span>
                            </div>
                        ))
                    }
                </div>

                <div className='report-creation-half'>
                    {
                        fields.slice(fields.length / 2, fields.length).map((label, index) => (
                            <div key={index} className='report-creation-check-item'>
                                <Checkbox 
                                    value={checkedFields[label] || false}
                                    onChange={(isChecked) => handleCheckboxChange(label, isChecked)}
                                />
                                <span className='report-creation-check-text'>{label}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
