import React from 'react';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render item from expense list', () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});
