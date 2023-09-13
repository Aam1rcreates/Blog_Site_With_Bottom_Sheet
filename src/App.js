import React, { useState } from 'react';
import './App.css';
import BottomSheet from './components/BottomSheet';
import Main from './components/Main';

function App() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetOpen(!bottomSheetOpen);
  };

  return (
    <div className="container">
      <Main toggleSheet={toggleBottomSheet} isOpen={bottomSheetOpen} />
      <BottomSheet isOpen={bottomSheetOpen} toggleSheet={toggleBottomSheet} />
    </div>
  );
}

export default App;
