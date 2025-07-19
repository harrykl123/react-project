import React from "react";
import MyImage from './image.png'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
function Header() {
    return (
        <>
            <div class="i">
                <img class="i1" src={MyImage} alt="logo" />
                <div class="i2">
                    <a class="a1" href="index.js">Home</a>
                    <a class="a1" href="#">About</a>
                    <a class="a1" href="#">Services</a>
                    <a class="a1" href="#">Contact</a>
                </div>
                <div class="i3">
                      <FontAwesomeIcon icon={faXTwitter} size="lg" color="white" />
                      <FontAwesomeIcon icon={faSquareFacebook} size="lg" color="white" />
                      <FontAwesomeIcon icon={faGoogle} size="lg" color="white" />
                </div>

            </div>
        </>
    )
}
export default Header;