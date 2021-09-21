import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './Pages/Route';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
		<Provider store={store}>
			<div className="App">
				<Route />	
			</div>
		</Provider>
  );
}

export default App;
