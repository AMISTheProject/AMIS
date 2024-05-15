import '../assets/style/styles.css';
import notifIcon from '../assets/images/notif.png';

export const Notifications = ({hasNotificiations = false}) => {
    return (
        <div className='notif-container'>
            <button className={`notif-button ${hasNotificiations ? 'show' : ''}`}>
                <img src={notifIcon} alt="Notifications" height="25px" width="25px"/>
            </button>
        </div>
    );
};