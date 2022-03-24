import React from 'react';
import './Banner.css';
function Banner() {
	return (
		<div className='banner'>
			<div className='banner__features'>
				<div className='banner__features__links'>
					<a href='/foodnetwork.ca' className='banner__title'>
						Baking Therapy
					</a>
					<h3 className='banner__description'>
						Carrot Cake Cinnamon Rolls are the Ultimate Sweet Treat!
					</h3>
				</div>
				<p className='banner__tag'>
					Carrot cake lovers, wait'til you try these.
				</p>
			</div>
			<img
				className='banner__image'
				src='https://i0.wp.com/assets.preprod.foodnetwork.ca/wp-content/uploads/2021/02/carrot-cake-1280.jpg?w=1200&quality=75'
				alt='Carrot cake lovers, will you try these'
			/>
		</div>
	);
}

export default Banner;
