import '../assets/style/styles.css';
import { Checkbox } from '../components/Checkbox';

export const ReportCreation = () => {
    return (
        <div className='report-creation-container'>
            <div className='report-creation-header'>

            </div>

            <div className='report-creation-content'>
                <div className='report-creation-half'>
                    <Checkbox />
                </div>

                <div className='report-creation-half'>

                </div>
            </div>
        </div>
    );
};