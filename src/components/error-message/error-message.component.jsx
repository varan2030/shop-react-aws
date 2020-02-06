import React from "react";

import "./error-message.styles.scss";

function ErrorMessage({ errorMessage, ...props }) {
	return (
		<div className="error-message">
			{errorMessage ? (
				<>
					<p>{errorMessage}</p>
				</>
			) : (
				<></>
			)}
		</div>
	);
}

export default ErrorMessage;
