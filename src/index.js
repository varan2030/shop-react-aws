import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";

import { store, persistor } from "./redux/store";

import Amplify from "aws-amplify";
import config from "./config";

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	},
	Storage: {
		region: config.s3.REGION,
		bucket: config.s3.BUCKET,
		identityPoolId: config.cognito.IDENTITY_POOL_ID
	},
	API: {
		endpoints: [
			{
				name: "users",
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			}
		]
	}
});

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();