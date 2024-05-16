import '../assets/style/styles.css';
import { PrimaryButton } from '../components/PrimaryButton';
import { Calendar } from '../components/Calendar';
import { ReportCard } from '../components/ReportCard';
import { OverviewCard } from '../components/OverviewCard';

export const Dashboard = () => {

    return (
        <div className='dashboard-container'>
            <div className='dashboard-header'>
                <div className='dashboard-header-title-container'>
                    <h4 className='dashboard-header-title'>Hello, Solon!</h4>
                    <p className='dashboard-header-desc'>Time to make progress on our projects!</p>
                </div>

                <PrimaryButton className="dashboard-custom-report-button" text='Quick custom report' />
            </div>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-half-container'>
                    <Calendar />

                    <div className='plant-files-container'>
                        <h4 className='plant-files-title'>Plant's files</h4>
                        <p className='plant-files-desc'>Don't forget to take a look at some of the plant's most significant files!</p>

                        <div className='plant-files-card-container'>
                            <ReportCard title='Capex Tracking Tool' date='1 May 2024' user='AMIS' />
                        </div>
                    </div>
                </div>

                <div className='dashboard-content-half-container'>
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
                </div>
            </div>
        </div>
    );
};