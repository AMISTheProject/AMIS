import '../assets/style/styles.css';

export const PageTitle = ({title, subtitle}) => {
    return  (
        <div className='page-title-container'>
            <h1 className='page-title'>{title}</h1>
            {subtitle && (
                <h2 className='page-subtitle'>{subtitle}</h2>
            )}
        </div>
    );
};