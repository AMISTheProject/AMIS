import '../assets/style/styles.css';
import { MonthStackCard } from './MonthStackCard';

export const MonthStack = () => {
    return (
        <div className='month-stack-container'>
            <div className='month-stack-header'>
                <h4 className='month-stack-title'>Month's Stack</h4>
                <a href='/' className='month-stack-button'><span>Manage</span></a>
            </div>

            <div className='month-stack-content'>
                <div className='month-stack-content-hbox'>
                    <MonthStackCard title='Project Engineer | SC' subtitle='5 assets under construction to check' abbr='PE' />
                    <MonthStackCard title='Project Engineer | SC' subtitle='5 assets under construction to check' abbr='PE' />
                </div>

                <div className='month-stack-content-hbox'>
                    <MonthStackCard title='Project Engineer | SC' subtitle='5 assets under construction to check' abbr='PE' />
                    <MonthStackCard title='Project Engineer | SC' subtitle='5 assets under construction to check' abbr='PE' />
                </div>
            </div>
        </div>
    );
};