import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// moment.locale('es');
console.log(moment().format('LL'));

export class ExpenseForm extends Component {
	constructor(props) {
		super();

		this.state = {
			description: props.expense ? props.expense.description : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			note: props.expense ? props.expense.note : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			focused: false,
			error: ''
		};
	}

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState({
			description
		});
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState({
				amount
			});
		}
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState({
			note
		});
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState({
				createdAt
			});
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState({
			focused
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			this.setState({ error: 'Please prove description and amount' });
		} else {
			this.setState({ error: '' });
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.focused}
						onFocusChange={this.onFocusChange}
						id="form_datepicker"
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						placeholder="Add a note for your expense (optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}

export default ExpenseForm;
