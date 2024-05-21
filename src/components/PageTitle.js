import '../assets/style/styles.css';

export const PageTitle = ({title, subtitle, button}) => {
    return  (
        <div className='page-title-container'>
            <div className="page-title-hbox">
                <h1 className='page-title'>{title}</h1>
                {subtitle && (
                    <h2 className='page-subtitle'>{subtitle}</h2>
                )}
            </div>
            {button}
        </div>
    );
};