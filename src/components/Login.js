import '../assets/style/styles.css';
import React, { useState } from 'react';
import logo from '../assets/images/amis-logo.png';
import userIcon from '../assets/images/user-icon.png';
import { PrimaryButton } from './PrimaryButton';
import { Checkbox } from './Checkbox';
import {DropdownList} from './DropdownList';

export const Login = () => {
    const [isChecked, setIsChecked] = useState(false);

    const options = [
        { value: 'plant-manager', label: 'Plant Manager' },
        { value:'plant-engineer',label:'Plant Engineer'},
        { value: 'finance-department', label: 'Finance Department' },
        { value: 'continuous-improvement-lead', label: 'Continuous Improvement Lead' },
        { value: 'business-services-organization', label: 'Business Services Organization' }
      ]
    return (
        <div className='login-container'>
            <div className='login-left-container'>
                <div className='login-left-header'>
                    <img src={logo} width='78px' height='45px' />
                </div>

                <div className='login-form-container'>
                    <div className='asset-screen-input-container'>
                        <label className='asset-screen-input-label' for="role">Username</label>
                        <input className='asset-screen-input-field' type="text" id="role" name="role" placeholder='Username'></input>
                    </div>
                    <div className='asset-screen-input-container'>
                        <label className='asset-screen-input-label' for="role">Role</label>
                        <DropdownList options={options} placeholder={'Select your role'}/>
                    </div>

                    <div className='asset-screen-input-container'>
                        <label className='asset-screen-input-label' for="password">Password</label>
                        <input className='asset-screen-input-field' type="password" id="password" name="password" placeholder='Enter your password'></input>
                    </div>

                    <div className='login-check-container'>
                        <Checkbox value={isChecked} onChange={setIsChecked} />
                        <p style={{marginTop: '14px'}}>Remember me</p>
                    </div>

                    <PrimaryButton text={'Log In'} color='#fff' bgColor='#EB3131' className='login-button' />
                </div>

                <div className='login-footer-container'>
                    <a href='/login' className='forgot-password-link'>Forgot your password?</a>
                </div>
            </div>

            <div className='login-right-container'>
            </div>
        </div>
    );
};