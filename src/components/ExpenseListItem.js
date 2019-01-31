import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{numeral(amount / 100).format('0.00 $')}
			-
			{moment(createdAt).format('Do MMMM, YYYY')}
		</p>
	</div>
);

//Without destructuring

// const ExpenseListItem = (props) => {
//   const { description, amount, createdAt } = props.expense;
//   return (
//     <div>
//       <h3>{description}</h3>
//       <p>{amount} - {createdAt}</p>
//     </div>
//   )
// }

export default ExpenseListItem;
