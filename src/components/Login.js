import '../assets/style/styles.css';
import React, { useState } from 'react';
import logo from '../assets/images/amis-logo.png';
import { PrimaryButton } from './PrimaryButton';
import { Checkbox } from './Checkbox';
import {DropdownList} from './DropdownList';

export const Login = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='login-container'>
            <div className='login-left-container'>
                <div className='login-left-header'>
                    <img src={logo} width='78px' height='45px' />
                </div>

                <div className='login-form-container'>
                    <div className='asset-screen-input-container'>
                        <label className='asset-screen-input-label' for="role">Role</label>
                        <DropdownList/>
                    </div>

                    <div className='asset-screen-input-container'>
                        <label className='asset-screen-input-label' for="password">Password</label>
                        <input className='asset-screen-input-field' type="password" id="password" name="password" placeholder='Enter your password'></input>
                    </div>

                    <div className='login-check-container'>
                        <Checkbox value={isChecked} onChange={setIsChecked} />
                        <p>Remember me</p>
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