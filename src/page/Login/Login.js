import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Login() {
    return (
        <div className='login'>
            <div className='login__wrap'>
                <form>
                    <h3>Login</h3>
                    <div className='group-item'>
                        <label>User name</label>
                        <div className='group-item__input'>
                            <FontAwesomeIcon icon="house" size="lg" className='icon' />
                            <input placeholder='Enter your name' />
                        </div>
                    </div>
                    <div className='group-item'>
                        <label>Password</label>
                        <div className='group-item__input'>
                            <FontAwesomeIcon icon="house" size="lg" className='icon' />
                            <input placeholder='Enter your password' />
                        </div>
                    </div>
                    <div className='group-item'>
                        <button className='btn btn__login' type='submit'>Login</button>
                    </div>
                    <p className='signUp-link'>You have an acount? <span>Sign up</span></p>
                </form>
            </div>
        </div>
    )
}
