import React from "react";
import PropTypes from "prop-types";

import './input.css';

export const Input = ({ label, type, placeholder, icon, ...props }) => {
    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <div className={`input-wrapper ${icon ? "with-icon" : ""}`}>
                {icon && <img src={icon} alt="icon" className="input-icon" />}
                <input type={type} placeholder={placeholder} className="input-field" {...props} />
            </div>
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(["text", "email", "password"]),
    placeholder: PropTypes.string,
    icon: PropTypes.string,
};

Input.defaultProps = {
    type: "text",
    placeholder: "",
    icon: null,
};