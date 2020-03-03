import React from "react";

import './collection-page.styles.scss';

function CollectionPage(props) {
    const path = props.location.pathname.split('/').slice(1);
    return (
        <div>
            {path.map(item => {
                return (
                    <div key={item}><h3>{item}</h3><br/></div>
                )
            })}
        </div>
    )
}

export default CollectionPage;