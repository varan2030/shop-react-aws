export default {
	s3: {
		REGION: "us-east-1",
		BUCKET: "note-app-course"
	},
	apiGateway: {
		REGION: "us-east-1",
		URL: "https://n43cckhaqk.execute-api.us-east-1.amazonaws.com/prod"
	},
	cognito: {
		REGION: "us-east-1",
		USER_POOL_ID: "us-east-1_fuxUUcxoX",
		APP_CLIENT_ID: "30dsej7ndqonemn0k89e68pk9",
		IDENTITY_POOL_ID: "us-east-1:a2eeeba0-6991-48a3-acd8-738b5d4d7ca2"
	},
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY: "pk_test_BjkFtBK6eHhwmEbJxLsAdZt000RqEEOefO"
};
