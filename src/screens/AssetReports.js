import '../assets/style/styles.css';
import { ReportCard } from '../components/ReportCard';
import groupIcon from '../assets/images/group-by-icon.png';
import navArrowIcon from '../assets/images/left-arrow-icon.png';
import demoPdf from '../assets/images/pdf-image.png';

export const AssetReports = () => {
    return (
        <div className='reports-container'>
            <div className='reports-content-container'>
                <div className="reports-title-container">
                    <h3 className='auc-sidebar-title'>Latest Reports</h3>
                    <img src={groupIcon} alt='Group' width='25px' height='25px'/>
                </div>

                <input className='asset-screen-input-field' id="search" name="search" placeholder='Search' />

                <div className='reports-card-container'>
                    <ReportCard title='May Asset Report' date='30 Apr 2024' user='Plant Manager' active={true}/>
                    <ReportCard title='April Asset Report' date='30 Mar 2024' user='Plant Manager' />
                    <ReportCard title='March Asset Report' date='28 Feb 2024' user='Plant Manager' />

                </div>
            </div>
            
            <div className='reports-pdf-container'>
                <div className='reports-pdf-header'>
                    <div className='reports-pdf-header-group'>
                        <img class="reports-preview-left-arrow" src={navArrowIcon} alt={'Go to previous file'} width='30px' height='30px' />
                        <span className='reports-pdf-text'><span className='reports-pdf-title'>April Asset Report</span> | Preview</span>
                    </div>

                    <div className='reports-pdf-header-group'>
                        <div className='reports-pdf-page-indicator-container'>
                            <span className='reports-pdf-page-indicator-text'>1/24</span>
                        </div>
                        <img class="reports-preview-right-arrow" src={navArrowIcon} alt={'Go to previous file'} width='30px' height='30px' style={{transform: 'rotate(180deg)'}}/>
                    </div>
                </div>

                <img src={demoPdf} width='100%' height='800px'/>
            </div>
        </div>
    );
};