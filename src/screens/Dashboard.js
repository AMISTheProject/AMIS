import '../assets/style/styles.css';
import { PrimaryButton } from '../components/PrimaryButton';
import { Calendar } from '../components/Calendar';
import { ReportCard } from '../components/ReportCard';
import { OverviewCard } from '../components/OverviewCard';
import pdfIcon from '../assets/images/PDF.png';
import excelIcon from '../assets/images/excel-icon.png';
import React, { useState, useEffect, useContext } from 'react';
import RoleContext from '../Context';
import { QuartersBarChart } from '../components/QuartersBarChart';
import { MonthStack } from '../components/MonthStack';

export const Dashboard = ({ role }) => {
    const { username } = useContext(RoleContext);
    const [subtitle, setSubtitle] = useState('Time to make progress on our projects!');
    const [headerButton, setHeaderButton] = useState(
        <PrimaryButton 
            className="dashboard-custom-report-button" 
            text='Quick custom report' 
        />
    );
    const [rightContainerContent, setRightContainerContent] = useState(
        <>
            <h3 className='monthly-overview-title'>Monthly Overview</h3>
            <div className='monthly-overview-card-row'>
                <OverviewCard number='4' desc='AUCs modified'/>
                <OverviewCard number='2' desc='Custom reports'/>
                <OverviewCard number='1' desc='Report shared'/>
            </div>

            <div className='monthly-overview-card-row'>
                <OverviewCard number='3' desc='Draft forms'/>
                <OverviewCard number='2' desc='Unread messages'/>
                <OverviewCard number='7' desc='Downloads'/>
            </div>
        </>
    );
    const [leftContainerContent, setLeftContainerContent] = useState(
        <>
            <h4 className='plant-files-title'>Plant's files</h4>
            <p className='plant-files-desc'>Don't forget to take a look at some of the plant's most significant files!</p>

            <div className='capex-tracking-tool-card'>
                <ReportCard title='Capex Tracking Tool' date='1 May 2024' user='AMIS' icon={excelIcon}/>
            </div>
            <div className='plant-files-card-container'>
                <ReportCard title='Capex Tracking Tool' date='1 May 2024' user='AMIS' icon={pdfIcon}/>
            </div>
        </>
    )

    useEffect(() => {
        function dynamicComponentLoad() {
            if(role === 'business-services-organization') {
                setSubtitle('Let’s secure plant’s proper workflow!');
                setHeaderButton(
                    <PrimaryButton 
                        color='#fff' 
                        bgColor='#EB3131' 
                        className="dashboard-custom-report-button" 
                        text='Quickly Approve Data' 
                    />
                );
                setRightContainerContent(
                    <>
                        <QuartersBarChart />
                    </>
                );
                setLeftContainerContent(
                    <>
                        <MonthStack />
                    </>
                )
            }
        }

        dynamicComponentLoad();
    }, []);


    return (
        <>
        <div className='dashboard-container'>
            <div className='dashboard-header'>
                <div className='dashboard-header-title-container'>
                    <h4 className='dashboard-header-title'>Hello, {username.split(' ')[0]}</h4>
                    <p className='dashboard-header-desc'>{subtitle}</p>
                </div>

                { headerButton }
            </div>

            <div className='dashboard-content-container'>
                <div className={`dashboard-content-half-container-left ${role}`}>
                    <div className={`dashboard-calendar-container ${role}`}>
                        <Calendar />
                    </div>

                    <div className='plant-files-container'>
                        { leftContainerContent }
                    </div>
                </div>

                <div className={`dashboard-content-half-container-right ${role}`}>
                    { rightContainerContent }
                </div>
            </div>
        </div>
        </>
    );
};