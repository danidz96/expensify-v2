import React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = () => (
	<div>
		404 - <NavLink to="/">Go home</NavLink>
	</div>
);

export default NotFoundPage;
