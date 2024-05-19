import '../assets/style/styles.css';

export const MonthStackCard = ({ title, subtitle, abbr }) => {
    return (
        <div className='month-stack-card-container'>
            <div className='month-stack-card-abbr-container'>
                <span className='month-stack-card-abbr'>{abbr}</span>
            </div>

            <div className='month-stack-card-vbox'>
                <h5 className='month-stack-card-title'>{title}</h5>
                <p className='month-stack-card-subtitle'>{subtitle}</p>
            </div>
        </div>
    );
};