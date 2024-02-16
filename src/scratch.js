import React from 'react';
import ScratchCard from 'lesca-react-scratch-card';
import './App.css';
import LogoImage from './download.png'; // Import your logo image
import Image2 from './2.png';
import Image1 from './1.png';


function App() {
  const handleComplete = () => {
    console.log('Scratch completed');
  };

  return (
    <div>



<div className="container">

<div className="overlay">
  <ScratchCard
    cover={Image1}
    percent={60}
    width={500}
    height={500}
    onComplete={handleComplete}
  >
    <img src={Image2} alt="Your Image" />
  </ScratchCard>
</div>
</div>

    </div>
   
  );
}

export default App;