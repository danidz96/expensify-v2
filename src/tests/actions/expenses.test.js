import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([ thunk ]);

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
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'Pencil',
		amount: 300,
		note: 'Test',
		createdAt: 1000
	};

	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
	});
});

test('should add expense with defaults to database and store', (done) => {
	const store = createMockStore({});
	const expenseDefault = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0
	};

	store
		.dispatch(startAddExpense(expenseDefault))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseDefault
				}
			});
			return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefault);
			done();
		});
});
