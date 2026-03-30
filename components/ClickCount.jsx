// ClickCount.jsx

import React, { useState } from 'react';

const ClickCount = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Click Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    );
};

export default ClickCount;