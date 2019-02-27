import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('should set up default filters values', () => {
	const state = filtersReducers(undefined, { type: '@@INIT' });

	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('year'),
		endDate: moment().endOf('year')
	});
});

test('should set sort by amount', () => {
	const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sort by amount', () => {
	const state = filtersReducers(undefined, { type: 'SORT_BY_DATE' });
	expect(state.sortBy).toBe('date');
});

const currentState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
};

test('should set text filter', () => {
	const text = 'bill';
	const action = {
		type: 'SET_TEXT_FILTER',
		text
	};

	const state = filtersReducers(currentState, action);
	expect(state.text).toBe(text);
});

test('should set start date', () => {
	const startDate = moment(0).add(5, 'days');
	const action = {
		type: 'SET_START_DATE',
		startDate
	};

	const state = filtersReducers(currentState, action);
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate,
		endDate: moment().endOf('month')
	});
});

test('should set end date', () => {
	const endDate = moment(0).subtract(5, 'days');
	const action = {
		type: 'SET_END_DATE',
		endDate
	};

	const state = filtersReducers(currentState, action);
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate
	});
});
