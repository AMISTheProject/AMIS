import '../assets/style/styles.css';
import arrow from '../assets/images/left-arrow-icon.png';
import { NavLink } from 'react-router-dom';

export const ApprovalsListRow = ({title, time}) => {
    return (
        <div className='approvals-row-container'>
            <div className='approvals-row-lhs'>
                <div className='approvals-circle'>
                    <span className='approvals-row-abbr'>PE</span>
                </div>

                <div className='approvals-row-lhs-vbox'>
                    <span className='approvals-role-title'>Plant Engineer</span>
                    <span className='approvals-role-plant'>Schimatari Plant</span>
                </div>
            </div>
            <span className='approvals-row-title'>{title}</span>
            <span className='approvals-row-time'>{time}</span>

            <div className='approvals-row-button-container'>
                <NavLink to='/asset-approval'>
                    <img src={arrow} width='25px' height='25px' style={{transform: 'rotate(180deg)', cursor: 'pointer'}} className='approvals-row-button'/>
                </NavLink>
            </div>
        </div>
    );
};