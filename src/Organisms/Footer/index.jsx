import './style.scss'
import React from 'react'
import github from './../../assets/img/social/github.png'


const Footer = () => {

    return (
        <div className='footer'>
                <a href="https://github.com/LoLMaGExE">
                    <div className='github footer-social footer-social_style-opacity'>
                        <img className='footer-social__image' src={github} />
                    </div>
                </a>
            <div className='footer__copyright'>Copyright ©2022 All rights reserved </div>
        </div>
    )}
    
export default Footer