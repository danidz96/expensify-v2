import React from 'react';
import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';

test('should render not found page', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);
	expect(wrapper).toMatchSnapshot();
});
