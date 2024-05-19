import '../assets/style/styles.css';
import enlargeIcon from '../assets/images/enlarge.svg';

export const QuartersBarChart = () => {
    return (
        <div className='chart-container'>
            <div className='chart-header-container'>
                <h4>Financial Periods Tracking</h4>
                <img src={enlargeIcon} width='25px' height='25px' className='chart-enlarge' />
            </div>

            <div className='chart-content-container'>
                <div className='chart-bar'>
                    <div className='chart-bar-bg'>
                        <div className='chart-bar-fill' />
                    </div>
                    <span className='chart-quarter'>Q1</span>
                </div>

                <div className='chart-bar'>
                    <div className='chart-bar-bg'>
                        <div className='chart-bar-fill-half' />
                    </div>
                    <span className='chart-quarter'>Q2</span>
                </div>

                <div className='chart-bar'>
                    <div className='chart-bar-bg'>
                        <div />
                    </div>
                    <span className='chart-quarter'>Q3</span>
                </div>

                <div className='chart-bar'>
                    <div className='chart-bar-bg'>
                        <div />
                    </div>
                    <span className='chart-quarter'>Q4</span>
                </div>
            </div>
        </div>
    );
};