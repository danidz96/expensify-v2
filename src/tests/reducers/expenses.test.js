import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer([], { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should add expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			id: 'asdf',
			description: 'dsadas',
			amount: 2222,
			note: 'fdfdsfds',
			createdAt: 3
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ ...expenses, action.expense ]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 1
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should not remove expense if id does not exist', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 9999
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should edit an expense by id', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			description: 'description modified'
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].description).toBe('description modified');
});

test('should not edit if id does not exists', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: 29292929,
		updates: {
			description: 'new description'
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [ expenses[1] ]
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[1] ]);
});
