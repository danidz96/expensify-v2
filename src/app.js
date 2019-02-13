import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import numeral from 'numeral';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 80, createdAt: 1 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createdAt: 2 }));
store.dispatch(addExpense({ description: 'Restaurant', amount: 30, createdAt: 5 }));
store.dispatch(addExpense({ description: 'Cinema', amount: 20, createdAt: 3 }));
store.dispatch(addExpense({ description: 'New PC', amount: 1500, createdAt: 4 }));

const state = store.getState();
console.warn(state);

console.log(getVisibleExpenses(state.expenses, state.filters));

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

ReactDOM.render(app, document.getElementById('app'));
