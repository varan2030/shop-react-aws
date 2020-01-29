import React from "react";

import './account-page.styles.scss';

function AccountPage(props) {
    console.log(props.match)
    return (
        <div className="account-page">
            Account page
        </div>
    )
}

export default AccountPage;