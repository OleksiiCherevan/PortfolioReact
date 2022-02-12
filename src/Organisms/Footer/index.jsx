import './style.scss'
import React from 'react'
import github from './../../assets/img/social/github.png'
const rights = 'Copyright ©2022 All rights reserved';

const Footer = () => {

    return (
        <div className='footer'>
                <a href="https://github.com/OleksiiCherevan">
                    <div className='github footer-social footer-social_style-opacity'>
                        <img className='footer-social__image' src={github} />
                    </div>
                </a>
            <div className='footer__copyright'>{rights} </div>
        </div>
    )}
    
export default Footer