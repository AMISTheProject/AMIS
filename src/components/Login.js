import '../assets/style/styles.css';
import React, { useState } from 'react';
import logo from '../assets/images/amis-logo.png';
import { PrimaryButton } from './PrimaryButton';
import { Checkbox } from './Checkbox';
import { DropdownList } from './DropdownList';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const options = [
        { value: 'plant-manager', label: 'Plant Manager' },
        { value:'plant-engineer',label:'Plant Engineer'},
        { value: 'finance-department', label: 'Finance Department' },
        { value: 'continuous-improvement-lead', label: 'Continuous Improvement Lead' },
        { value: 'business-services-organization', label: 'Business Services Organization' }
    ]

      const handleLogin = () => {
        if (username.trim() !== '' && role !== '' && password !== '') {
            navigate('/');
        } else {
            console.log('Please enter your credentials.');
        }
    };

    return (
        <div className='login-container'>
            <div className='login-left-container'>
                <div className='login-left-header'>
                    <img src={logo} width='78px' height='45px' />
                </div>

                <div className='login-form-container'>
                    <div className='asset-screen-input-container'>
                        <label className='asset-screen-input-label' for="username">Username</label>
                        <input 
                            className='asset-screen-input-field' 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder='Username' 
                            value={username}
                            onChange={(e) => {setUsername(e.target.value)}}
                        >
                        </input>
                    </div>
                    <div className='asset-screen-input-container'>
                        <label className='asset-screen-input-label' for="role">Role</label>
                        <DropdownList options={options} placeholder={'Select your role'} startValue={role} onChange={setRole}/>
                    </div>

                    <div className='asset-screen-input-container'>
                        <label className='asset-screen-input-label' for="password">Password</label>
                        <input className='asset-screen-input-field' type="password" id="password" name="password" placeholder='Enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                    </div>

                    <div className='login-check-container'>
                        <Checkbox value={isChecked} onChange={setIsChecked} />
                        <p style={{marginTop: '14px'}}>Remember me</p>
                    </div>

                    <div onClick={handleLogin}>
                        <PrimaryButton text={'Log In'} color='#fff' bgColor='#EB3131' className='login-button' />
                    </div>
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