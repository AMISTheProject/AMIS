import '../assets/style/styles.css';

export const OverviewCard = ({number, desc, icon}) => {
    return (
        <div className='overview-card-container'>
            <div className='overview-main-container'>
                <p className='overview-number'>{number}</p>
                <img src={icon} width='20px' height='20px' />
            </div>
            <span>{desc}</span>
        </div>
    );
};