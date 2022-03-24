import React from 'react';
import './Row.css';
import { FaRegStar } from 'react-icons/fa';
function Row({ title }) {
	return (
		<div className='row'>
			{title && <h2 className='section_title'>{title}</h2>}
			<div className='cardwrapper'>
				<div className='cardcontainer'>
					<img
						src='https://i0.wp.com/assets.preprod.foodnetwork.ca/wp-content/uploads/2022/03/chicken-malai-tikka-feat.jpg?w=300&h=300&crop=1'
						alt='chicken'
					/>
				</div>
				<div className='details'>
					<div className='category'>quick and easy</div>
					<h2 className='title'>malai chicken rolls</h2>

					<div className='rating'>
						<FaRegStar
							style={{
								backgroundColor: 'red',
								border: 'none',
								marginRight: '5px',
							}}
						/>
						4
					</div>
					<div className='details__extra'>
						<div className='time_chefname'>50min </div>
						<div className='servings'>3rolls</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Row;
