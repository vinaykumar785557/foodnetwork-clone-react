import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import TopFooter from './components/TopFooter';
import BottomFooter from './components/BottomFooter';
import Add from './components/Add';
import Episode from './components/Episode';
import Button from './components/Button';
import Row from './components/Row';
function App() {
	return (
		<div className='app'>
			<Header />
			<Banner />
			<Row />
			<Add />
			<Row title='quick and easy' />
			<Button text='see more from quick and easy' />
			<Episode />
			<Add />
			<Row title='shows' />
			<Button text='see more from shows' />
			<Add />
			<Row title='vegetarian' />
			<Button text='see more from vegetarian' />
			<TopFooter />
			<BottomFooter />
		</div>
	);
}

export default App;
