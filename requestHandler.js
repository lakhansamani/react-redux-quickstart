import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import configureStore from './src/stores/configureStore';
import {browserHistory, Route, Router, IndexRoute} from 'react-router';
import Home from './src/components/Home';
import LoginForm from './src/components/LoginForm';
import App from './src/components/App';
import Logout from './src/components/Logout';
import AddItem from './src/components/AddItem';
import UpdateItem from './src/components/UpdateItem';
import {match, RouterContext} from 'react-router';
import { requireAuth } from './src/utils/authservice';
function handleRender(req,res){
	const store = configureStore();
	const initialState = store.getState();
	const routes = (
		<Router history = {browserHistory}>
			<Route path = "/" component = {App}>
				<IndexRoute component = {Home} />
				<Route path="login" component={LoginForm} />
				<Route  onEnter = {requireAuth}>
					<IndexRoute component = {Home} />
					<Route path="logout" component={Logout} />
					<Route path="addItem" component={AddItem} />
					<Route path="updateItem/:id" component={UpdateItem} />
				</Route>
			</Route>
		</Router>
	)
	const routesMap = {
		routes,
		location: req.url
	}
	match(routesMap, function(err, redirectLocation, renderProps){
		if(err){
			res.status(500).send("opps error");
		}else if(redirectLocation){
			res.redirect(302,redirectLocation.pathname + redirectLocation.search)
		}else if(renderProps){
			const html = renderToString(
				<Provider store={store}>
						<RouterContext {...renderProps} />
				</Provider>
			)
			res.status(200).send(renderFullPage(html,initialState))
		}else{
			res.status(404).send('Not Found');
		}
	});
}
function renderFullPage(html,initialState){
	return `<!doctype html>
	<html>
		<head>
			<title>Sample Application</title>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
		</head>
		<body>
			<div id="app"><div>${html}</div></div>
			<script>
				window.__INITIAL_STATE___ = ${JSON.stringify(initialState)}
			</script>
			<script src="/dist/bundle.js"></script>
		</body>
	</html>`
}
module.exports = handleRender;
