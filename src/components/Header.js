import React, { useState } from 'react';
import './Header.css';
import {
	FaFacebookF,
	FaTiktok,
	FaInstagram,
	FaSearch,
	FaRegWindowClose,
} from 'react-icons/fa';
import socialLinks from '../sociallinks';
import Modal from 'react-modal/lib/components/Modal';

Modal.setAppElement('#root');

const customStyles = {
	content: {
		display: 'block',
		maxWidth: '100vw',
		maxHeight: '100vh',
		borderRadius: '4px',
		backgroundColor: '#fff',
	},
};
function Header() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleModal() {
		setIsOpen(!isOpen);
	}
	return (
		<div className='header'>
			<img
				className='header__logo'
				// src='https://1000logos.net/wp-content/uploads/2020/09/Food-Network-Logo.png'
				src='https://www.foodnetwork.ca/images/food-network-canada-logo.svg'
				alt='foodnetwork logo'></img>

			<nav className='header__navlinks'>
				<ul className='header__navitems'>
					<li>Recipes</li>
					<li>Chefs & Hosts</li>
					<li>Stream On StackTv</li>
				</ul>
			</nav>
			<div className='header__socialbuttons'>
				<p>Follow Us</p>
				<div className='header__buttons'>
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
			<div className='header__search'>
				<p>Search</p>
				<button onClick={toggleModal}>
					<FaSearch />
				</button>

				<Modal
					isOpen={isOpen}
					onRequestClose={toggleModal}
					style={customStyles}
					contentLabel='search modal'>
					<button onClick={toggleModal} className='modal__close'>
						<FaRegWindowClose />
					</button>
					<div className='modal__input'>
						<input type='search' placeholder='Search' className='input'></input>
						<button type='submit' className='modal__search'>
							Go
						</button>
					</div>
				</Modal>
			</div>
		</div>
	);
}

export default Header;
