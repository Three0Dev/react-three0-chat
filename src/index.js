import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import init from 'three0-js-sdk';
import reportWebVitals from './reportWebVitals';
import './App.css'

const config = {
	"contractName": "test7-pseyuhwg2d119xpuwlynk6.sree2.testnet",
	"projectId": "test7-pseyuhwg2d119xpuwlynk6",
	"chainType": "NEAR_TESTNET"
};

init(config)
	.then(() => {
		const container = document.querySelector('#root')
		const root = createRoot(container)
		// eslint-disable-next-line react/jsx-filename-extension
		root.render(<React.StrictMode><App /></React.StrictMode>)
	})
	.catch(console.error)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
