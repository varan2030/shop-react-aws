export default {
	s3: {
		REGION: "us-east-1",
		BUCKET: "fabishop-api-dev-attachmentsbucket-lvefip5casun"
	},
	apiGateway: {
		REGION: "us-east-1",
		URL: "https://58cue09r9c.execute-api.us-east-1.amazonaws.com/dev"
	},
	cognito: {
		REGION: "us-east-1",
		USER_POOL_ID: "us-east-1_nwk6JbCTb",
		APP_CLIENT_ID: "11vbldns38c0n3signjb1ch466",
		IDENTITY_POOL_ID: "us-east-1:8f133d32-fb1f-40c6-8370-ad1f84682752"
	},
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY: "pk_test_BjkFtBK6eHhwmEbJxLsAdZt000RqEEOefO"
};
