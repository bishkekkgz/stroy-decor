import React from 'react'
import Navbar from './Navbar'
import PrimeDecorPlintusNat from './primedec/PrimeDecorPlintusNat'
import NavBlockItems from '../components/NavBlockItems';

const Main = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <NavBlockItems />
            <PrimeDecorPlintusNat />
        
        </React.Fragment>
    )
}

export default Main
