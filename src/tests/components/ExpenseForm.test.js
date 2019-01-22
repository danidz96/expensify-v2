import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submisson', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('description')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('should set note on input change', () => {
	const value = 'New note';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('note')).toBe(value);
});

test('should not set amount if input is invalid', () => {
	const value = '22.2220';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('amount')).toBe('');
});
