import authReducer from '../../reducers/auth';

test('should set uid from log in', () => {
	const action = {
		type: 'LOGIN',
		uid: 'abc'
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('should clear uid for log out', () => {
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer({ uid: 'abc' }, action);
	expect(state).toEqual({});
});
