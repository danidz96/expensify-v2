import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, dispatch, description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>
			{amount} - {createdAt}
		</p>
		<button
			onClick={() => {
				dispatch(removeExpense({ id }));
			}}
		>
			Delete
		</button>
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

export default connect()(ExpenseListItem);
