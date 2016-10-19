import React from 'react';
import AppWrapper from '../AppWrapper';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


function App({children}) {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
			<AppWrapper />
		</MuiThemeProvider>
	);
}

export default App;
