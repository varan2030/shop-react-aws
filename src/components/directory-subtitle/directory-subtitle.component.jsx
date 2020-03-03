import React from "react";
import { Paper } from "@material-ui/core";

import './directory-subtitle.styles.scss';

function DirectorySubtitle(props) {
    const directoryHeader = props.location.pathname.split('/');
    let header = "FABI"
    if (["login", "signup", "account", "cart"].find(item => item === directoryHeader[1])) {
        header = directoryHeader[1].toUpperCase()
    }
    return (
    <Paper elevation={4} className="directory">
        <h5 className="directory-header">{header}</h5>
    </Paper>)
}

export default DirectorySubtitle;