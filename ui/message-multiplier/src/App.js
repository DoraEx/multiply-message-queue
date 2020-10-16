import React from 'react';
import './App.css';
import WorkFrom from './components/WorkForm';
function App() {
  return (
   <div>
     <div>New Work | Queued Work | Completed Work</div>
     <div>
       New work
       <WorkFrom></WorkFrom>
     </div>

   </div>
  );
}

export default App;
