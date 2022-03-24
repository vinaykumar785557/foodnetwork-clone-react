import React from 'react';
import './BottomFooter.css';

const urls = {
	corus: 'https://www.corusent.com/',
	wnetwork: 'https://www.wnetwork.com/',
	slice: 'https://www.slice.ca/',
	showcase: 'https://www.showcase.ca/',
	hgtv: 'https://www.hgtv.ca/',
	global: 'https://www.globaltv.com/',
	globalNews: 'https://globalnews.ca/',
	nelvana: 'https://www.nelvana.com/',
};

function BottomFooter() {
	return (
		<div className='logos'>
			<img className='corouslogo'
				src='https://www.pinclipart.com/picdir/big/563-5631781_corus-entertainment-logo-clipart.png'
				alt='corus'
				onClick={() => window.open(urls.corus)}></img>

			<div className='logos__brands'>
				<img
					src='https://www.wnetwork.com/wp-content/themes/wnetwork-child/assets/icons/sitelogo.svg'
					alt='wnetwork'
					onClick={() => window.open(urls.wnetwork)}></img>
				<img
					src='https://www.slice.ca/wp-content/themes/slice/assets/icons/slice_logo_colour.svg'
					alt='slice'
					onClick={() => window.open(urls.slice)}></img>

				<img
					src='https://www.showcase.ca/wp-content/themes/showcase-child/assets/icons/sitelogo.svg'
					alt='showcase'
					onClick={() => window.open(urls.showcase)}
				/>

				<img
					src='https://www.hgtv.ca/Content/images/HGTV_Logo_White.svg'
					alt='hgtv'
					onClick={() => window.open(urls.hgtv)}></img>
				<img
					src='https://www.globaltv.com/wp-content/themes/globaltv-child/assets/icons/sitelogo.svg'
					alt='global'
					onClick={() => window.open(urls.global)}
				/>
				<img
					src='https://globalnews.ca/wp-content/themes/shaw-globalnews/assets/dist/images/logo-text.svg'
					alt='globalnews'
					onClick={() => window.open(urls.globalNews)}
				/>

				<img
					src='https://images.squarespace-cdn.com/content/v1/603d7680ba04c013c1653dd5/1614653667583-UHLU8ZDC3C9IPHKWV4AX/NEL_Logo_White.png?format=1500w'
					alt='nelvana'
					onClick={() => window.open(urls.nelvana)}
				/>
			</div>
		</div>
	);
}

export default BottomFooter;
