import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex center py-8">
        Click on the Vite and React logos to learn more
      </div>
    </>
  );
}

export default App;
