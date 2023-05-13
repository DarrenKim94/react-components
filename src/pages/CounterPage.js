import { useState, useEffect } from "react";
import Button from "../components/Button";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count)
    }, [ count])

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return {
        count,
        handleIncrement,
    }
}

function CounterPage({initialCount}) {
    const {count, handleIncrement} = useCounter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={handleIncrement}>
                Increment
            </Button>
        </div>
    )
}

export default CounterPage;