import '../assets/style/styles.css';
import shareIcon from '../assets/images/share.png';
import downloadIcon from '../assets/images/download.png';

export const ReportCard = ({title, date, user, active, icon}) => {
    return (
        <div className={`report-card-container ${active? 'active' : ''}`}>
            <div className='report-card-left'>
                <img src={icon} alt='Asset PDF file' height='50px' width='50px'/>
            </div>
            <div className='report-card-right'>
                <div className='report-card-title-container'>
                    <img src={downloadIcon} alt='Download report' height='15px' width='15px' />
                    <img src={shareIcon} alt='Share report' height='20px' width='15px' />
                    <p className='report-card-title'>{title}</p>
                </div>
                <p className='report-card-info'>submitted on {date} <span className='report-card-username'>@{user}</span></p>
            </div>
        </div>
    );
};