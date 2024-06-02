import React, { useCallback, useState, memo } from "react";

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Increment function, memoized using useCallback
    const handleIncrement = useCallback(() => {
        setCount(count => count + 1);
    }, []);

    // Decrement function, memoized using useCallback
    const handleDecrement = useCallback(() => {
        setCount(count => count - 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

// Child component with increment and decrement buttons
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
