import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import numeral from 'numeral';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';

const store = configureStore();

numeral.register('locale', 'es', {
	delimiters: {
		thousands: ' ',
		decimal: ','
	},
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't'
	},
	currency: {
		symbol: '€'
	}
});

// switch between locales
numeral.locale('es');

const app = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(app, document.getElementById('app'));
});
