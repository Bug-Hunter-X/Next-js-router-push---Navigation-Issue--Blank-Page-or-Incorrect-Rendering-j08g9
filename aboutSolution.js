```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact'); 
  };

  useEffect(() => {
    // Add a small delay or any other necessary logic
    // to make sure the navigation works correctly.
    const timeoutId = setTimeout(() => {}, 100);
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact</button>
    </div>
  );
}
```