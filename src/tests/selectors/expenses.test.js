import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
	{
		id: 1,
		description: 'Gas Bill',
		amount: 7000,
		note: '',
		createdAt: moment(0)
	},
	{
		id: 2,
		description: 'Rent',
		amount: 40000,
		note: '',
		createdAt: moment(0).subtract(4, 'days')
	},
	{
		id: 3,
		description: 'Water Bill',
		amount: 3000,
		note: '',
		createdAt: moment(0).add(5, 'days')
	}
];

test('should filter by text value', () => {
	const filters = {
		text: 'Bill',
		sortBy: 'date',
		endDate: undefined,
		startDate: undefined
	};
	const results = selectExpenses(expenses, filters);

	expect(results).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by start date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		endDate: undefined,
		startDate: moment(0)
	};
	const results = selectExpenses(expenses, filters);

	expect(results).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by end date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		endDate: moment(0).add(2, 'days'),
		startDate: undefined
	};
	const results = selectExpenses(expenses, filters);

	expect(results).toEqual([ expenses[0], expenses[1] ]);
});

test('should order by date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		endDate: undefined,
		startDate: undefined
	};
	const results = selectExpenses(expenses, filters);

	expect(results).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should order by amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		endDate: undefined,
		startDate: undefined
	};
	const results = selectExpenses(expenses, filters);

	expect(results).toEqual([ expenses[1], expenses[0], expenses[2] ]);
});
