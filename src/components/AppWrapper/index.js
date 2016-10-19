import React from 'react';
import AppNav from '../AppNav';


function AppWrapper({children}) {
	return (
		<div>
			<AppNav />
            <div className="appContainer">
				{children}
            </div>
		</div>
	);
}

export default AppWrapper;
