import React from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';

const LoadingPage = () => (
	<div className="loader">
		<ImpulseSpinner size={80} frontColor="#2196f3" backColor="#cacccd" loading={true} />
	</div>
);

export default LoadingPage;
