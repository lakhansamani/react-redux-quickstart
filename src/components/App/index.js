import React from 'react';
import Nav from '../Nav';
function App({children}) {
	return (
		<div>
			<Nav />
			<div className="appContainer">
				{children}
			</div>
		</div>
	);
}

export default App;
