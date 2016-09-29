import React from 'react';
import AppNav from '../AppNav';
function App({children}) {
	return (
		<div>
			<AppNav />
			<div className="container appContainer">
				{children}
			</div>
		</div>
	);
}

export default App;
