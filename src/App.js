import React from 'react'
import { Products, Navbar} from './components'
import { commerce } from './lib/commerce'

const App = () => {
    return (
        <div>
            <Navbar/>
           <Products/>
        </div>
    )
}

export default App
