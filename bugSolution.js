```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect ran with count:', count);
    return () => {
      isMounted.current = false;
      console.log('Cleanup function ran');
    };
  }, [count]); // Only re-run if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        if (isMounted.current) {
          setCount(count + 1);
        }
      }}>Click me</button>
    </div>
  );
}

export default MyComponent;
```