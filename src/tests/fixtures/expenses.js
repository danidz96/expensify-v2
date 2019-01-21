import moment from 'moment';

export default [
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
