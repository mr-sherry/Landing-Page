import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Global/Global.css';

import ClickSpark from './Components/Animations/ClickAni/Spark.jsx';
import Orb from './Components/Animations/Bg/Orb.jsx';

createRoot(document.getElementById('root')).render(
  <>

    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: 0,               // lock to right edge
        transform: 'translateY(-46%)', // vertically centred
        width: '700px',         // adjust to taste
        height: '600px',
        pointerEvents: 'none',  // don’t block clicks
        zIndex: -2,             // behind everything
        overflow: 'hidden',
        backgroundColor: 'black'
      }}
    >
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={true}
      />

    </div>
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={30}
      sparkCount={10}
      duration={800}
    >
      <App />
    </ClickSpark>


  </>
)
