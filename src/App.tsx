import './App.css';
import React, { useState } from 'react';
import CpfMaskedTextField from './DemoComponents/CpfMaskedTextField';
import TelephoneMaskedTextField from './DemoComponents/TelephoneMaskedTextField';

const App = () => {
  return (
    <div>
      <TelephoneMaskedTextField />
      <CpfMaskedTextField />
    </div>
  );
}

export default App;