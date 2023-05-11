
function Link ({to, children}) {
    const handleCLick = (event) => {
        event.preventDefault();
    }

    return <a onClick={handleCLick}>{children}</a>
}

export default Link;