import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className='App text-center'>
      <p className='text-3xl font-bold text-red-600'>
        Hello React Dev! {count}
      </p>
      <button
        className='rounded-sm bg-slate-200 px-2 py-0.5 hover:bg-slate-300'
        onClick={handleClick}
      >
        Increment
      </button>
    </div>
  );
}
export default App;
