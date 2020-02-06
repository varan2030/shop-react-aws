import React from "react";

import './account-page.styles.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import { API } from "aws-amplify";

function AccountPage(props) {
    const handleTestButtonClick = async (event) => {
		event.preventDefault();
		const user = {
			userEmail: 'test@test.com',
			userName: 'varan',
            items: [
                {
                    itemName: 'Cool Shoes',
                    itemPrice: "12345"
                }
            ]
        }
        try {
            const currentUser = await createUser(user);
                console.log(currentUser);
            } catch (e) {
                console.log(e);
            }
		
	}

	const createUser =  (user) => {
        return API.post('users', '/users', {
				body: user
			})
	}
    return (
        <div className="account-page">
            Account page
            <CustomButton
					onClick={handleTestButtonClick}
					variant="contained"
				>
					test
				</CustomButton>
        </div>
    )
}

export default AccountPage;