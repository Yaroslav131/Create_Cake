import React from 'react';
import './footer.css'
import facebook from './images.footer/Vector.Facebook.png'
import email from './images.footer/Email-Vector.png'
import geo from './images.footer/Geo-Vector.png'
import phone from './images.footer/Phone-Vector.png'
import inst from './images.footer/Vector.instagram.png'
import twitter from './images.footer/Vector.twitter.png'
import '../../App.css'

export default function Footer(props: any) {
    return (
        <footer>
            <div className="Div-logo">
                <p className="Logo footer-p">LOGO</p>
            </div>
            <div className="Div-about">
                <p className="About-us footer-p">О НАС</p>
            </div>
            <div className="Div-desserts">
                <p className="Desserts footer-p">ДЕСЕРТЫ</p>
            </div>
            <div className="Div-makecake">
                <p className="Make-acake footer-p">СОБЕРИ СВОЙ ТОРТ</p>
            </div>
            <div className="Div-contacts">
                <p className="Contacts footer-p">КОНТАКТЫ</p>
            </div>
            <div className="Footer-images">
                <img
                    className="Facebook-logo"
                    src={facebook}
                    alt="Facebook"
                />
                <img
                    className="Twitter-logo"
                    src={twitter}
                    alt="Twitter"
                />
                <img
                    className="Instagram-logo"
                    src={inst}
                    alt="Instagram"
                />
            </div>
            <div className="Footer-info">
                <img className="Geo-logo"
                    src={geo} alt="Geo" />
                <img
                    className="Phone-logo"
                    src={phone}
                    alt="Phone"
                />
                <img
                    className="Email-logo"
                    src={email}
                    alt="Email"
                />
            </div>
            <div className="Div-city">
                <p className="City footer-p">г. Город, ул. Улица, 12</p>
            </div>
            <div className="Div-phone">
                <p className="Phone-number footer-p">8 (123) 456 78 90</p>
            </div>
            <div className="Div-email footer-p">
                <p className="Email footer-p">CHOCOFORNIA@GMAIL.COM</p>
            </div>
        </footer>
    )
}
