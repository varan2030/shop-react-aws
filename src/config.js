export default {
	s3: {
		REGION: "us-east-1",
		BUCKET: "fabishop-api-dev-attachmentsbucket-1kgblwfmh0cg3"
	},
	apiGateway: {
		REGION: "us-east-1",
		URL: "https://7npby8dg45.execute-api.us-east-1.amazonaws.com/dev"
	},
	cognito: {
		REGION: "us-east-1",
		USER_POOL_ID: "us-east-1_wVpYp59hy",
		APP_CLIENT_ID: "eb56rhm0d1lke8dbeorfo04ud",
		IDENTITY_POOL_ID: "us-east-1:00ccb5d5-ecc3-44b5-885d-ffeb63997ce4"
	},
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY: "pk_test_BjkFtBK6eHhwmEbJxLsAdZt000RqEEOefO"
};
