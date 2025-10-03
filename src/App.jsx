import { useState } from 'react';
import TimerClass from './components/TimerClass';
import TimerFunction from './components/TimerFunction';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      {/* class implemented */}
        {showTimer && <TimerClass />} 
        <hr />
      {/* func implemented */}
        {showTimer && <TimerFunction />} 
      <button onClick={() => {setShowTimer(false);}}>Unmount timer</button>
      <hr />
    </>
    
  )
}

export default App
