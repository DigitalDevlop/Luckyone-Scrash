import React from 'react';
import ScratchCard from 'lesca-react-scratch-card';
import './App.css';
import LogoImage from './download.png';
import Image2 from './2.png';
import Image1 from './1.png';
import Image3 from './3.png';
import Image4 from './4.png';


function App() {
  const handleComplete = () => {
    console.log('Scratch completed');
  };

  return (
    <div className="container">
      <div className="scratch-container">
        <div className="overlay">
          <ScratchCard
            cover={Image1}
            percent={60}
            width={400}
            height={400}
            onComplete={handleComplete}
          >
            <img className="img" src={Image2} alt="Your Image" />
          </ScratchCard>
        </div>
        <div className="overlay">
          <ScratchCard
            cover={Image1}
            percent={60}
            width={400}
            height={400}
            onComplete={handleComplete}
          >
            <img className="img" src={Image3} alt="Your Image" />
          </ScratchCard>
        </div>
        <div className="overlay">
          <ScratchCard
            cover={Image1}
            percent={60}
            width={400}
            height={400}
            onComplete={handleComplete}
          >
            <img className="img" src={Image4} alt="Your Image" />
          </ScratchCard>
        </div>
      </div>
    </div>
  );
}

export default App;