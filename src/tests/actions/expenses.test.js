import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
	const action = removeExpense('123abc');
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should setup update expense action object', () => {
	const action = editExpense('123abc', { name: 'Test' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			name: 'Test'
		}
	});
});

test('should setup add expense action object with provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: 200500,
		createdAt: 1000,
		note: 'testing expenses'
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			...expenseData
		}
	});
});

test('should setup add expense action object without provided values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			amount: 0,
			createdAt: 0,
			description: '',
			id: expect.any(String),
			note: ''
		}
	});
});
