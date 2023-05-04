import className from "classnames";

const finalClassName = className({
    'bg-blue-500': true,
    'text-yellow-500': false,
});

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,

}) {
    const classes = className('flex items-center px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-black': primary,
        'border-blue-500 bg-gray-500 text-white': secondary,
        'border-blue-500 bg-green-500 text-white': success,
        'border-blue-500 bg-yellow-500 text-white': warning,
        'border-blue-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,'text-green-500': outline && success,'text-yellow-400': outline && warning,'text-red-500': outline && danger,
    });

    return (
        <button className={classes} >{children}</button>
    );
}

Button.propTypes = {
    checkPurposeValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
        + Number (!!secondary)
        + Number (!!warning)
        + Number (!!success)
        + Number (!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true')
        }
    }
};

export default Button;