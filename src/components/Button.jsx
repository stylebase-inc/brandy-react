// import React from "react";

// import PropTypes from 'prop-types';

// import './button.css';

// export const Button = ({
//     primary = false,
//     backgroundColor = null,
//     icon,
//     label,
//     iconPosition = "before",
//     ...props
// }) => {
//     const mode = primary ? 'button-primary' : 'button-secondary';
//     const renderButton = ({ label, icon, iconPosition, ...btnProps }, index) => (
//         <button
//             key={index}
//             type="button"
//             className={["button", mode].join(" ")}
//             style={{ backgroundColor }}
//             {...btnProps}
//         >
//             {icon && iconPosition === "before" && (
//                 <img src={icon} alt="icon" className="icon" />
//             )}
//             {label}
//             {icon && iconPosition === "after" && (
//                 <img src={icon} alt="icon" className="icon" />
//             )}
//         </button>
//     );
//     return (
//         <button
//             type="button"
//             className={['button', mode].join(' ')}
//             {...props}
//         >
//             {icon && iconPosition === "before" && <img src={icon} alt="icon" className="icon" />}
//             {label}
//             {icon && iconPosition === "after" && <img src={icon} alt="icon" className="icon" />}
//         </button>
//     );
// };

// Button.propTypes = {
//     primary: PropTypes.bool,
//     label: PropTypes.string.isRequired,
//     onClick: PropTypes.func,
//     icon: PropTypes.string,
//     iconPosition: PropTypes.oneOf(["before", "after"]),
// };
// Button.defaultProps = {
//     iconPosition: "before",
//     icon: null,
// };

import React from "react";
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({
    primary = false,
    backgroundColor = null,
    icon,
    label,
    iconPosition = "before",
    buttons, // new prop
    ...props
}) => {
    const mode = primary ? 'button-primary' : 'button-secondary';

    if (buttons && Array.isArray(buttons)) {
        return (
            <>
                <div className="button-group">
                    {buttons.map((btn, idx) => (
                        <Button key={idx} {...btn} />
                    ))}
                </div>
            </>
        );
    }

    return (
        <button
            type="button"
            style={{ backgroundColor }}
            className={['button', mode].join(' ')}
            {...props}
        >
            {icon && iconPosition === "before" && <img src={icon} alt="icon" className="icon" />}
            {label}
            {icon && iconPosition === "after" && <img src={icon} alt="icon" className="icon" />}
        </button>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(["before", "after"]),
    backgroundColor: PropTypes.string,
    buttons: PropTypes.array,
};

Button.defaultProps = {
    iconPosition: "before",
    icon: null,
    buttons: null,
};