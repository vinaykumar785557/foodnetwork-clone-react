import React from 'react';
import socialLinks from '../sociallinks';
import { FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import './TopFooter.css';
function TopFooter() {
	return (
		<footer className='footer__wrapper'>
			<div className='container'>
				<div className='social__wrapper'>
					<img
						src='https://www.foodnetwork.ca/images/food-network-canada-logo.svg'
						alt='foodnetwork'></img>
					<div className='title__social'>Follow Us</div>
					<div className='social__buttons'>
						<button onClick={() => window.open(socialLinks.instagram)}>
							<FaInstagram />
						</button>
						<button onClick={() => window.open(socialLinks.tiktok)}>
							<FaTiktok />
						</button>
						<button onClick={() => window.open(socialLinks.facebook)}>
							<FaFacebookF />
						</button>
					</div>
				</div>
				<nav className='external'>
					<ul className='external__list'>
						<li>About Us</li>
						<li>Casting</li>
						<li>Advertising Standard Terms</li>
						<li>Advertise</li>
						<li>Privacy Policy</li>
						<li>Faq</li>
						<li>copyright</li> <li>terms of use</li>
						<li>where to watch</li>
					</ul>
				</nav>
			</div>
			<div className='footer__copyright'>
				Corus Entertainment Inc., {new Date().getFullYear()} All rights
				reserved. Corus Television.
			</div>
		</footer>
	);
}

export default TopFooter;
