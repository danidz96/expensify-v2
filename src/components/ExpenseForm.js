import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

moment.locale('es');
console.log(moment().format('LL'));

export class ExpenseForm extends Component {
	state = {
		description: '',
		amount: '',
		note: '',
		createdAt: moment(),
		focused: false
	};

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState({
			description
		});
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
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
		this.setState({
			createdAt
		});
	};

	onFocusChange = ({ focused }) => {
		this.setState({
			focused
		});
	};

	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
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
					<textarea placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange} />
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}

export default ExpenseForm;
