import '../assets/style/styles.css';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Notifications } from './Notifications';
import logo from '../assets/images/amis-logo-off-trans.png';

export const Header = ({role}) => {
    const [navItems, setNavItems] = useState(
        [
            {navName: 'Home', navRoute: '/'}, 
            {navName: 'Reports', navRoute: '/reports'},
            {navName: 'AUC', navRoute: '/auc'},
            {navName: 'Drafts', navRoute: '/drafts'}
        ]
    );

    useEffect(() => {
        function dynamicComponentLoad() {
            if(role === 'business-services-organization') {
                setNavItems(
                    [
                        {navName: 'Home', navRoute: '/'}, 
                        {navName: 'Approvals', navRoute: '/approvals'},
                        {navName: 'Reports', navRoute: '/report-creation'},
                    ]
                );
            }
        }

        dynamicComponentLoad();
    }, []);

    return (
        <div className="header-container">
            <NavLink to="/">
                <img src={logo} alt='AMIS' width='60px' height='60px' className='logo'/>
                {/* <img src={logo} alt='AMIS' width='50px' height='50px' style={{cursor: 'pointer', transform: 'rotate(180deg)', marginLeft: -15}}/> */}
            </NavLink>
            <div className="nav-container">
                <ul className="nav-list">
                    {
                        navItems.map((navItem, index) => (
                            <li key={index}><NavLink to={navItem.navRoute} className="nav-item">{navItem.navName}</NavLink></li>
                        ))
                    }
                </ul>
            </div>
            <div className='header-right-container'>
                <Notifications className="notifications" hasNotificiations={true}/>
                <div className='pfp-container'>
                    <p className='pfp-text'>PlEng</p>
                </div>
            </div>
        </div>
    );
};