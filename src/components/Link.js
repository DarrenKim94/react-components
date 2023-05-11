import { useContext } from "react";
import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";


function Link ({to, children, className, activeClassName}) {
    const {navigate, currentPath} = useNavigation();

    const classes = classNames('text-blue-500', className,
    currentPath === to && activeClassName
    );

    const handleCLick = (event) => {
        if (event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();

        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleCLick}>{children}</a>
}

export default Link;