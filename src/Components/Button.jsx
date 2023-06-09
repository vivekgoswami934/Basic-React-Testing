import React from 'react'
import "./Button.css"

const Button = ({ children, colorScheme, variant, onClick }) => {
    return (
        <button data-testid="customButton"
            className={`button ${colorScheme || "blue"} ${variant || "outline"}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
