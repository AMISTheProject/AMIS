import '../assets/style/styles.css';

export const ChipButton = ({text, icon}) => {
    return (
        <div className='chip-container'>
            <img src={icon} width='20px' height='20px' />
            <span>{text}</span>
        </div>
    );
};