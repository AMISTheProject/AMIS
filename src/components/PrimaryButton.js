import '../assets/style/styles.css';

export const PrimaryButton = ({text, bgColor, color, className}) => {
    return (
        <button style={{backgroundColor: bgColor, borderWidth: 0, borderRadius: 12, paddingTop: 14, paddingBottom: 14, cursor: 'pointer', paddingLeft: 18, paddingRight: 18, boxShadow: `0px 0px 4px ${bgColor === '#EB3131' ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}`}} className={`primary-button ${className}`}>
            <span style={{color: color, fontSize: 16}}>{text}</span>
        </button>
    );
};