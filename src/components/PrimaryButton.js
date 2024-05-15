import '../assets/style/styles.css';

export const PrimaryButton = ({text, bgColor, color, className}) => {
    return (
        <button style={{backgroundColor: bgColor, borderWidth: 0, borderRadius: 12, paddingTop: 14, paddingBottom: 14, paddingLeft: 18, paddingRight: 18}} className={className}>
            <span style={{color: color, fontSize: 16}}>{text}</span>
        </button>
    );
};