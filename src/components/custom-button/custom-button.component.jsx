import React from "react";

import './custom-button.styles.scss';
import { Button } from "@material-ui/core";

function CustomButton ({variant, type, children, className, buttonClassName, disabled, ...props}) {
    return (
        <div className={`${className} custom-button`}>
            <Button 
                className={`${buttonClassName}`}
                variant={variant} 
                type={type} 
                disabled={disabled}
                onClick={props.onClick}
            >
                {children}
            </Button>
        </div>
    )
}

export default CustomButton;