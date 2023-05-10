import { useState } from "react";

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCLick = () => {
        setIsOpen(!isOpen);
    }

    const renderedOptions = options.map((option) =>{
        return <div key={option.value}>
            {option.label}
        </div>
    })

    return(
        <div>
            <div onClick={handleCLick}>Select</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;