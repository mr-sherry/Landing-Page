import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/hero/Hero'
import ScrollImage from './Components/movingImage/ScrollImage'
import SmartTech from './Components/SmartTech/SmartTech'
import './App.css'
import ExplodedView from './Components/ExplodedView/ExplodedView'


function App() {

    return (
        <>
            <Header />
            <Hero />
            <div className='mainDiv'>
                <ScrollImage />
            </div>
            <SmartTech />
            <ExplodedView />
        </>
    )
}

export default App