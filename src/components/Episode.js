import React from 'react';
import './Episode.css';
function Episode() {
	return (
		<div className='episode__container'>
			<div className='episode__wrapper'>
				<img
					src='https://i0.wp.com/assets.preprod.foodnetwork.ca/wp-content/uploads/2022/03/Food_Website_Tile_1620x1080_V2.jpg?w=1920&quality=75'
					alt='episode'></img>

				<div className='episode__details'>
					<h2 className='episode__title'>
						Top Chef - New Episodes Thursdays at 10ep
					</h2>

					<p>
						A new season of the award-winning competition returns, this time to
						the streets of Houston.
						<a href='/' className='episode__chefs'>
							Watch aspiring chefs put their culinary skills to the test{' '}
						</a>
						for the chance to earn the title of Top Chef and visit
						foodnetwork.ca to see eliminated chefs compete in{' '}
						<a href='/' className='episode__kitchen'>
							Last Chance Kitchen.
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Episode;
