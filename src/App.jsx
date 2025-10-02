import { useState } from 'react';
import TimerClass from './components/TimerClass';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      {showTimer && <TimerClass />}
      <button onClick={() => {setShowTimer(false);}}>Unmount timer</button>
      <hr />
    </>
    
  )
}

export default App
