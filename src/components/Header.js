import '../assets/style/styles.css';
import { NavLink } from 'react-router-dom';
import { Notifications } from './Notifications';
import logo from '../assets/images/amis-logo.png';

export const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt='AMIS' width='78px' height='45px' />
            <div className="nav-container">
                <ul className="nav-list">
                    <li><NavLink exact to="/" className="nav-item">Home</NavLink></li>
                    <li><NavLink to="/reports" className="nav-item">Reports</NavLink></li>
                    <li><NavLink to="/auc" className="nav-item">AUC</NavLink></li>
                    <li><NavLink to="/drafts" className="nav-item">Drafts</NavLink></li>
                </ul>
            </div>
            <div className='header-right-container'>
                <Notifications hasNotificiations={true}/>
                <div className='pfp-container'>
                    <p className='pfp-text'>PlEng</p>
                </div>
            </div>
        </div>
    );
};